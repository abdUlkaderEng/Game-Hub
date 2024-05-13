import { useQuery } from "@tanstack/react-query";
import APIClient, { fetchResponse } from "../Services/api-client";
import genres from "../data/genres";
import ms from "ms";

export interface Genre{
    id :number,
    name :string
    image_background :string
}
var apiClient = new APIClient<Genre>('genres')
const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData : genres
}
    
)
export default useGenres