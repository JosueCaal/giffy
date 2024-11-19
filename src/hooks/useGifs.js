import { useEffect, useState } from "react"
import getGifs from "../services/getGif"

export function useGifs ({keyword}={keyword: null}){
    const [loading, setLoadign] = useState(false)
    const [gifs, setGifs] = useState([])


    useEffect(function(){
        setLoadign(true)
        //recuperamos la keyword localstorage
        const keywordToUse = keyword || localStorage.getItem('lastKeyword')
        getGifs({keyword:keywordToUse})
        .then(gifs => {
            setGifs(gifs)
            setLoadign(false) 
            //guardamos la keyword localstorage
            localStorage.setItem('lastKeyword', keyword)    
        })
    },[keyword])

    return {loading,gifs}
}