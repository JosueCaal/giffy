
const apiKey ='E7LIL9dtb2EUCBXtKAsV0Ry1noX1fVgF'

export default function getGifs({keyword = 'morty'} = {}){
   
    const urlAPI = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=5&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    
   return fetch(urlAPI)
      .then(res => res.json())
      .then(response =>{
        const {data} = response
        if(Array.isArray(data)){
          const gifs = data.map(image =>{
              
              const {images, title, id} = image
              const {url} = images.fixed_width_small
              return {title, id, url}
          })
          return gifs
        }
      })
     
    
}