import { create } from "zustand";
interface GameQuery {
    genreID?: number;
    platformID?: number;
    sortOrder?: string;
    searchText?: string;
  }
interface GameQueryStore{
    gameQuery: GameQuery;
    setSearchText: (searchText: string) => void;
    setPlatformID: (platformID: number) => void;
    setGenreID: (genreID: number) => void;
    setSortOrder: (sortOrder: string) => void;
}
const useGameQueryStore = create<GameQueryStore>(set => ({
    gameQuery :{},
    setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
    setPlatformID: platformID => (set(store => ({ gameQuery: { ...store.gameQuery, platformID } }))),
    setGenreID: genreID => (set(store => ({ gameQuery: { ...store.gameQuery, genreID } }))),
    setSortOrder: sortOrder => (set(store => ({ gameQuery: { ...store.gameQuery, sortOrder } }))),
}))
export default useGameQueryStore