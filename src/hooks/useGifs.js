import { useContext, useEffect, useState } from "react"
import getGifs from "../services/getGif"
import GifsContext from "../context/GifsContext"

export function useGifs ({keyword}={keyword: null}){
    const [loading, setLoadign] = useState(false)
    const {gifs, setGifs} = useContext(GifsContext)

    useEffect(function(){
        setLoadign(true)
        //recuperamos la keyword localstorage
        const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'
        getGifs({keyword:keywordToUse})
        .then(gifs => {
            setGifs(gifs)
            setLoadign(false) 
            //guardamos la keyword localstorage
            localStorage.setItem('lastKeyword', keyword)    
        })
    },[keyword, setGifs])

    
    return {loading, gifs}
}