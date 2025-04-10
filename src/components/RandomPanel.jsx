import {useEffect, useState} from "react";

import axios from "axios";
import Loader from "./Loader.jsx";

export default function RandomPanel(props){
    const imgURL = props.imgURL;
    const isLoading = props.isLoading
    const GetImage = props.GetImage;


    return(
        <div className="bg-black/1 backdrop-blur-xl min-h-[40%] w-[90%] md:w-[50%] rounded-2xl flex flex-col items-center p-5 gap-5">
            <div className='h-[500px]'>
                {isLoading ?  (<Loader/>) : (<img src={imgURL} alt="" className="rounded-2xl h-[500px]"/>)}
            </div>
            
            <div className="w-[100%] flex items-center justify-evenly">
                <button  className="bg-gray-800 px-5 py-3 text-2xl text-white rounded-2xl" onClick={()=>{GetImage()}}>Generate Random Meme</button>
            </div>

        </div>
    )
}
