import useGenres from "../hooks/useGenres";
import { Genre } from "../entities/Genre";
import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import GenreListSkelton from "./GenreListSkelton";
import useGameQueryStore from "../Store";

const GenreList = () => {
  const setSelectedGenreID = useGameQueryStore((s) => s.setGenreID);
  const selectedGenreID = useGameQueryStore((s) => s.gameQuery.genreID);
  const { data, error, isLoading } = useGenres();
  const textSkeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {/* {error && <></>} */}
        {isLoading &&
          textSkeleton.map((skeleton) => <GenreListSkelton key={skeleton} />)}
        {data?.results.map((genre) => (
          <ListItem key={genre.id}>
            <HStack paddingY={"4px"}>
              <Image
                boxSize={"32px"}
                borderRadius={"4px"}
                src={genre.image_background}
                objectFit={"cover"}
              />
              <Button
                textAlign="left"
                whiteSpace="normal"
                fontWeight={genre.id === selectedGenreID ? "bold" : "normal"}
                onClick={() => setSelectedGenreID(genre.id)}
                variant="link"
                fontSize="lg"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};
export default GenreList;
