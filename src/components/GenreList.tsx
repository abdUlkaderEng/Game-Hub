import React, { ReactNode } from "react";
import useGenres from "../hooks/useGenres";
import { HStack, Image, List, ListItem, Skeleton, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../Services/image-url";
import GenreListSkelton from "./GenreListSkelton";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

const GenreList = () => {
  const { data ,error , isloading } = useGenres();
  const textSkeleton =[1,2,3,4,5,6,7,8]
  

 return (
    <List>
   {isloading && textSkeleton.map(skeleton => <GenreListSkelton />)}
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack paddingY={"4px"}>
            <Image
              boxSize={"32px"}
              borderRadius={"4px"}
              src={genre.image_background}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};
export default GenreList;
