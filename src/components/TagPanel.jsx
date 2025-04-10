import {useState} from "react";

export default function TagPanel(props){
    const setQuery = props.setQuery;
    const SearchImage = props.SearchImage;
    const[topic,setTopic] = useState('')

    function inputHandler(event){
        setTopic(event.target.value)
    }
    function submitData(event){
        event.preventDefault()
        setQuery(topic)
        setTopic('')
    }
    return(
        <div className="bg-black/1 backdrop-blur-xl min-h-[20%] w-[90%] md:w-[50%] rounded-2xl flex flex-col items-center p-5 gap-5">
            <h1 className="text-white text-xl font-bold">Enter topic here to get meme:</h1>
            <form className="flex flex-col justify-evenly h-[200px]" onSubmit={submitData}>
                <input type="text" placeholder="Enter Topic..." className="h-15 w-100 border-2 rounded-4xl p-2 focus:outline-0 text-white text-xl" value={topic} onChange={inputHandler}/>
                <button className="bg-gray-800 px-5 py-3 rounded-2xl text-white">Get Meme.</button>
            </form>
        </div>
    )
}
