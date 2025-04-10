import './index.css'
import RandomPanel from "./components/RandomPanel.jsx";
import TagPanel from "./components/TagPanel.jsx";
import {useEffect, useState, useRef} from "react";
import axios from "axios";

function App() {
    const[imgURL,setImage] = useState('./bgimg.jpg');
    const hasMounted = useRef(false);
    const API_KEY =  import.meta.env.VITE_API_MEME;
    const randomUrl = 'https://api.humorapi.com/memes/random'
    const searchUrl = 'https://api.humorapi.com/memes/search'
    const[query,setQuery]=useState('');

    const [isLoading,setLoading] = useState(false);


    async function GetImage(){
        setLoading(true);
        const data = await axios(`${randomUrl}?api-key=${API_KEY}`)
        setImage(data.data.url)
        setTimeout(()=>{
            setLoading(false);
        },1000);

    }

    async function SearchImage(){
        setLoading(true);
        const data = await axios(`${searchUrl}?api-key=${API_KEY}&number=1&keywords=${query}&type=image`)
        console.log(data)
    }

    useEffect(()=>{
        if (!hasMounted.current) {
            hasMounted.current = true;
            return;
        }
        SearchImage();
    },[query])

    useEffect(()=>{GetImage()},[])

  return (
      <div className="bg-[url(./bgimg.jpg)] flex flex-col bg-cover h-screen w-screen  justify-evenly items-center">
          <RandomPanel imgURL = {imgURL} isLoading={isLoading} GetImage={GetImage}/>
          <TagPanel setQuery={setQuery} SearchImage={SearchImage}/>
      </div>
  )
}

export default App
