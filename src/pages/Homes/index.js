import React from "react";
import { Link } from "wouter";

const POPULAR_GIFS= ["Rick", "Morty", "Pokemon", "Naruto"]

export default function Home(){
    return(
        <>
            <h3 className="App-title" >Gifs APP </h3>
            <ul>
                {
                    POPULAR_GIFS.map((PopularGif)=>(
                        <li key={PopularGif}>
                            <Link to ={`/search/${PopularGif}`}> GIFS DE {PopularGif}</Link>
                        </li>
                    ))
                }
            </ul>
            
        </>
    )
}