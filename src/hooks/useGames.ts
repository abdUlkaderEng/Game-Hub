import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient, { fetchResponse } from "../Services/api-client";
import { Platform } from "./usePlatforms";

const apiClient = new APIClient<Game>('/games')
export interface Game {
    id: number;
    name: string;
    background_image : string
    parent_platforms : {platform : Platform}[]
    metacritic: number,
    rating_top:number
};
const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<fetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({pageParam = 1}) => 
      apiClient.getAll({
        params: {
          genres: gameQuery.genreID,
          parent_platforms: gameQuery.platformID,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page :pageParam
        },

      
      }),
    getNextPageParam:(lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000//24hours
    
  });
export default useGames;