import useGenres, { Genre } from "../hooks/useGenres";
import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import GenreListSkelton from "./GenreListSkelton";
interface props{
    onSelectGenre : (genre:Genre) => void,
    selectedGenre : Genre |null 

}
const GenreList = ({selectedGenre,onSelectGenre}:props) => {
  const { data ,error , isloading } = useGenres();
  const textSkeleton =[1,2,3,4,5,6,7,8,9]
  

 return (
     
     <List>
      {error && <></>}
      {isloading && textSkeleton.map(skeleton => <GenreListSkelton key={skeleton} />)}
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack paddingY={"4px"}>
            <Image
              boxSize={"32px"}
              borderRadius={"4px"}
              src={genre.image_background}
            />
            <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectGenre(genre)} variant='link' fontSize="lg">{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};
export default GenreList;
