import axios from "axios";
import {useEffect, useState} from "react";

export default function UseImg(){
    const [query,setQuery] = useState('');
    const [imgURL,setImage] = useState('');
    const API_KEY =  import.meta.env.VITE_API_KEY;
    const [isLoading,setLoading] = useState(false);
    const randomMeme = `https://meme-api.com/gimme`;
    const searchMeme = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${query}`


    async function GetImage(){
       if(!query){
           setLoading(true);
           const {data} = await axios(randomMeme);
           setImage(data.url)
           setTimeout(()=>{
               setLoading(false);
           },1000);
       }else{
           console.log(`getting ${query}`  )
           setLoading(true);
           const {data} = await axios(searchMeme);
           setImage(data.data.images.downsized_large.url)
           setTimeout(()=>{
               setLoading(false);
           },1000);
       }

    }

    useEffect(() => {
        GetImage()
    }, [query]);


    return {imgURL,isLoading,GetImage,setQuery};
}