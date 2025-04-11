# Random Meme Generator  

This project is a **Random Meme Generator** built using React.js. It allows users to generate random memes or search for memes based on a specific topic.  

## Features  
- Generate random memes with a single click.  
- Search for memes by entering a topic.  
- Loading animation while fetching memes.  


## Installation  

1. Clone the repository:  
    ```bash  
    git clone https://github.com/iamprashu/random-meme-generator.git  
    cd random-meme-generator  
    ```  

2. Install dependencies:  
    ```bash  
    npm install  
    ```  

3. Create a `.env` file in the root directory and add your Giphy API key:  
    ```env  
    VITE_API_KEY=your_giphy_api_key  
    ```  

4. Start the development server:  
    ```bash  
    npm run dev  
    ```  

## Components  

### 1. **Loader**  
Displays a loading animation while memes are being fetched.  
```jsx  
import './loaderCss.css';  

export default function Loader() {  
     return (  
          <div className="min-h-[500px] flex items-center justify-center">  
                <div className="🤚">  
                     <div className="👉"></div>  
                     <div className="👉"></div>  
                     <div className="👉"></div>  
                     <div className="👉"></div>  
                     <div className="🌴"></div>  
                     <div className="👍"></div>  
                </div>  
          </div>  
     );  
}  
```  

### 2. **UseImg**  
Custom hook to fetch memes from APIs.  
```jsx  
import axios from "axios";  
import { useEffect, useState } from "react";  

export default function UseImg() {  
     const [query, setQuery] = useState('');  
     const [imgURL, setImage] = useState('');  
     const API_KEY = import.meta.env.VITE_API_KEY;  
     const [isLoading, setLoading] = useState(false);  
     const randomMeme = `https://meme-api.com/gimme`;  
     const searchMeme = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${query}`;  

     async function GetImage() {  
          if (!query) {  
                setLoading(true);  
                const { data } = await axios(randomMeme);  
                setImage(data.url);  
                setTimeout(() => {  
                     setLoading(false);  
                }, 1000);  
          } else {  
                setLoading(true);  
                const { data } = await axios(searchMeme);  
                setImage(data.data.images.downsized_large.url);  
                setTimeout(() => {  
                     setLoading(false);  
                }, 1000);  
          }  
     }  

     useEffect(() => {  
          GetImage();  
     }, [query]);  

     return { imgURL, isLoading, GetImage, setQuery };  
}  
```  

### 3. **RandomPanel**  
Displays the meme and provides a button to generate random memes.  
```jsx  
import Loader from "./Loader.jsx";  

export default function RandomPanel(props) {  
     const { isLoading, imgURL, GetImage, setQuery } = props;  

     return (  
          <div className="bg-black/1 backdrop-blur-xl min-h-[40%] w-[90%] md:w-[50%] rounded-2xl flex flex-col items-center p-5 gap-5">  
                <div className="h-[500px]">  
                     {isLoading ? (<Loader />) : (<img src={imgURL} alt="" className="rounded-2xl h-[500px] max-w-[100%]" />)}  
                </div>  

                <div className="w-[100%] flex items-center justify-evenly">  
                     <button className="bg-fuchsia-950 px-5 py-3 text-2xl text-white rounded-2xl hover:bg-fuchsia-900" onClick={() => { setQuery(''); GetImage(); }}>  
                          Generate Random Meme  
                     </button>  
                </div>  
          </div>  
     );  
}  
```  

### 4. **TagPanel**  
Allows users to search for memes by entering a topic.  
```jsx  
import { useState } from "react";  

export default function TagPanel(props) {  
     const { setQuery, GetImage } = props;  
     const [searchData, setSearchData] = useState('');  

     function submitData(event) {  
          event.preventDefault();  
          if (!searchData) {  
                alert('Please Enter Query');  
          } else {  
                setQuery(searchData);  
                setSearchData('');  
          }  
     }  

     return (  
          <div className="bg-black/1 backdrop-blur-xl min-h-[20%] w-[90%] md:w-[50%] rounded-2xl flex flex-col items-center p-5 gap-5">  
                <h1 className="text-white text-xl font-bold">Enter topic here to get meme:</h1>  
                <form className="flex flex-col justify-evenly h-[200px]" onSubmit={submitData}>  
                     <input type="text" placeholder="Enter Topic..." className="h-15 w-100 border-2 rounded-4xl p-2 focus:outline-0 text-white text-xl" value={searchData} onChange={(event) => setSearchData(event.target.value)} />  
                     <button className="bg-fuchsia-950 hover:bg-fuchsia-900 px-5 py-3 rounded-2xl text-white">Get Meme</button>  
                </form>  
          </div>  
     );  
}  
```  

## Running the App  
The app is rendered in the `App.jsx` file and mounted to the DOM using React's `createRoot`.  

```jsx  
import { createRoot } from 'react-dom/client';  
import './index.css';  
import App from './App.jsx';  

createRoot(document.getElementById('root')).render(  
     <App />  
);  
```  

## License  
This project is licensed under the [MIT License](LICENSE).  

## Contributing  
Feel free to fork the repository and submit pull requests.  

## Acknowledgments  
- [Meme API](https://meme-api.com/)  
- [Giphy API](https://developers.giphy.com/)  
