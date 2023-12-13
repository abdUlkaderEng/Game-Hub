import { useState, useEffect } from "react";
import apiClient from "../Services/api-client";
import { CanceledError } from "axios";

export interface Platform{
    id : number;
    name: string;
    slug: string;
}
export interface Game {
    id: number;
    name: string;
    background_image : string
    parent_platforms : {platform : Platform}[]
    metacritic: number
  }
  interface fetchGamesResponse {
    count: number;
    results: Game[];
  }
const useGames =() => {
    const [isloading , setLoading] = useState(false)
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    useEffect(() => {
        const controller = new AbortController()
      setLoading(true)  
      apiClient
        .get<fetchGamesResponse>("/games" ,{signal : controller.signal})
        .then((res) => 
        {
          setGames(res.data.results)
          setLoading(false)
        })
        .catch((err) => 
        {
            if(err instanceof CanceledError) return;
            setError(err.message)
            setLoading(false)

          });
        return () => controller.abort()
    },[]);
    return ({games ,error ,isloading})
}
export default useGames