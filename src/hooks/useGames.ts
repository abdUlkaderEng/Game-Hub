import { useState, useEffect } from "react";
import apiClient from "../Services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";
import { Genre } from "./useGenres";

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
const useGames =(slectedGenre :Genre |null) => useData<Game>('/games' , {params : {genres:slectedGenre?.id}} , [slectedGenre?.id])
export default useGames