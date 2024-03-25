import { useQuery } from "@tanstack/react-query"
import apiClient, { fetchResponse } from "../Services/api-client"
 interface Platform{
    id : number,
    name :string,
    slug :string
}
const usePlatforms = () => useQuery({
    queryKey:['platforms'],   
    queryFn: () => apiClient.get<fetchResponse<Platform>>('/platforms/lists/parents').then(res => res.data)
}) 
export default usePlatforms