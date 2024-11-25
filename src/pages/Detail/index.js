import React, { useContext } from "react";
import Gif from "../../components/Gif";
import GifsContext from "../../context/GifsContext";
import useGlobalGifs from "../../hooks/useGlobalGifs";

export default function Detail({params}){
   const gifs  = useGlobalGifs();
  
  const gif = gifs.find(singleGif => singleGif.id === params.id);

  if (!gif) return <p>Gif no encontrado</p>;

  return (
    <div>
      <h1>Detalle del GIF</h1>
      <Gif {...gif} />
    </div>
  );

}
