import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../Services/api-client";

interface Genre{
    id :number,
    name :string
}
interface fetchGenresResponse{
    count: number,
    results: Genre[]
}
const useGenres =() => {
    const [isloading , setLoading] = useState(false)
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    useEffect(() => {
        const controller = new AbortController()
      setLoading(true)  
      apiClient
        .get<fetchGenresResponse>("/genres" ,{signal : controller.signal})
        .then((res) => 
        {
          setGenres(res.data.results)
          setLoading(false)
        })
        .catch((err) => 
        {
            if(err instanceof CanceledError) return;
            setError(err.message)
            setLoading(false)

          });
        return () => controller.abort()
    },
    []);
    return ({genres ,error ,isloading})
}
export default useGenres