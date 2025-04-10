import {useEffect, useState} from "react";

import axios from "axios";

export default function RandomPanel(){
    const[img,setImage] = useState('');
    const url = 'https://api.giphy.com/v1/gifs/random';
    const key =  import.meta.env.VITE_API_KEY;
    const [isLoading,setLoading] = useState(false);


    async function GetImage(){
            const {data} = await axios(`${url}?api_key=${key}`)
        setImage(data.data.images.downsized_large.url)

    }

    useEffect(()=>{GetImage()},[])

    return(
        <div className="bg-black min-h-[40%] w-[90%] md:w-[50%] rounded-2xl flex flex-col items-center p-5 gap-5">
            <div>
                <img src={img} alt="" className="rounded-2xl"/>
            </div>
            
            <div className="w-[100%] flex items-center justify-evenly">
                <button  className="bg-gray-800 px-5 py-3 text-2xl text-white rounded-2xl" onClick={()=>{GetImage()}}>Generate Random</button>
            </div>

        </div>
    )
}
