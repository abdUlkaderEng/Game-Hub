import { useQuery } from "@tanstack/react-query"
import ms from "ms"
import APIClient from "../Services/api-client"
import platforms from "../data/platforms"
import { Platform } from "../entities/Platform"
var apiClient = new APIClient<Platform>('/platforms/lists/parents') 
const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime:ms('24h'),
    initialData: platforms
}) 
export default usePlatforms


