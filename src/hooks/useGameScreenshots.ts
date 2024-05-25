import { useQuery } from "@tanstack/react-query"
import APIClient from "../Services/api-client"
import { GameScreenshots } from "../entities/GameScreenShots"



const useGameScreenshots = (gameId:number) => {
    const apiClient = new APIClient<GameScreenshots>(`/games/${gameId}/screenshots`)
    return useQuery({
        queryKey: ['screenshots', gameId],
        queryFn:    apiClient.getAll
    })
}
export default useGameScreenshots