import './index.css'
import RandomPanel from "./components/RandomPanel.jsx";
import TagPanel from "./components/TagPanel.jsx";

function App() {

  return (
      <div className="bg-[url(./bgimg.jpg)] flex flex-col bg-cover h-screen w-screen  justify-evenly items-center">
          <RandomPanel/>
          <TagPanel/>
      </div>
  )
}

export default App
