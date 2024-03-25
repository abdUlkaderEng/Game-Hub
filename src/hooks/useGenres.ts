import { useQuery } from "@tanstack/react-query";
import APIClient, { fetchResponse } from "../Services/api-client";

export interface Genre{
    id :number,
    name :string
    image_background :string
}
var apiClient = new APIClient<Genre>('genres')
const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24 hours
}
    
)
export default useGenres