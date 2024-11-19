import React, {useEffect, useState} from "react";
import ListOfGifs from "../../components/ListOfGifs";
import getGifs from "../../services/getGif";
import {useGifs} from "../../hooks/useGifs";

export default function SearchResults ({params}){

    const {keyword} = params    
    const {loading, gifs} = useGifs({keyword})

    /*
    const [gifs, setGifs] = useState([])
    const [loading, setLoadign] = useState(false)

    useEffect(function(){
        setLoadign(true)    
        getGifs({keyword})
        .then(gifs => {
            setGifs(gifs)
            setLoadign(false) 
        })
    },[keyword])*/

    return<>
        {
            loading?<h2>cargando</h2> : <ListOfGifs gifs={gifs}/>
        }
    </>

}

