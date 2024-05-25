import React from "react";
import useTrailer from "../hooks/useTrailer";
import { AspectRatio, Spinner } from "@chakra-ui/react";

interface Props {
  gameID: number;
}
const GameTrailer = ({ gameID }: Props) => {
    const { data, error, isLoading } = useTrailer(gameID);
    console.log(data);
    
    if(isLoading) return null
    if(error) throw error
    const first = data?.results[0];

  return first ? <video src={first.data[480]} poster={first.preview} controls /> : null;
};

export default GameTrailer;
