import React, {useState} from "react";
import { Link, useLocation } from "wouter";

const POPULAR_GIFS= ["Rick", "Morty", "Pokemon", "Naruto"]

export default function Home(){
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()
    console.log(path);
    
    
    const handleSubmit = evt => {
        evt.preventDefault()
        pushLocation(`/search/${keyword}`)
        //naver ruta
        console.log(keyword);
        
    } 
    const handleChange = evt  =>{
        setKeyword(evt.target.value)
    }

    return(
        <>
            <h3 className="App-title" >Gifs APP </h3>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" value={keyword}/>
                <input type="submit" value="Buscar" />
            </form>
           
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