import './index.css'
import RandomPanel from "./components/RandomPanel.jsx";
import TagPanel from "./components/TagPanel.jsx";
import useImg from './components/useImg.jsx'




function App() {
    const {imgURL,isLoading,GetImage,setQuery} = useImg();
      return (
          <div className="bg-[url(./bgimg.jpg)] flex flex-col bg-cover h-screen w-screen  justify-evenly items-center">
              <RandomPanel isLoading={isLoading} GetImage={GetImage} imgURL={imgURL} setQuery={setQuery}/>
              <TagPanel setQuery={setQuery} GetImage={GetImage}/>
          </div>
      )
}

export default App
