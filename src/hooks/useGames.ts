import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient, { fetchResponse } from "../Services/api-client";
import useGameQueryStore from "../Store";
import Game from "../entities/Game";

const apiClient = new APIClient<Game>('/games')

const useGames = () => {
  const gameQuery = useGameQueryStore(s => s.gameQuery)
  return useInfiniteQuery<fetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({pageParam = 1}) => 
      apiClient.getAll({
        params: {
          genres: gameQuery.genreID,
          parent_platforms: gameQuery.platformID,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam

        },

      
      }),
    getNextPageParam:(lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms('24h')
    
  });
}
  
export default useGames;