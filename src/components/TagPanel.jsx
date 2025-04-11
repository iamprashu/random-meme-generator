import {useState} from "react";

export default function TagPanel(props){
    const setQuery = props.setQuery;
    const GetImage = props.GetImage;

    const[searchData,setSearchData] = useState('');

    function submitData(event){
        if(!searchData){
            alert('Please Enter Query');
        }
        event.preventDefault()
        setQuery(searchData);
        setSearchData('');
    }

    return(
        <div className="bg-black/1 backdrop-blur-xl min-h-[20%] w-[90%] md:w-[50%] rounded-2xl flex flex-col items-center p-5 gap-5">
            <h1 className="text-white text-xl font-bold">Enter topic here to get meme:</h1>
            <form className="flex flex-col justify-evenly h-[200px]" onSubmit={submitData}>
                <input type="text" placeholder="Enter Topic..." className="h-15 w-100 border-2 rounded-4xl p-2 focus:outline-0 text-white text-xl" value={searchData}
                       onChange={(event)=>setSearchData(event.target.value)}/>;
                <button className="bg-fuchsia-950 hover:bg-fuchsia-900 px-5 py-3 rounded-2xl text-white">Get Meme.</button>
            </form>
        </div>
    )
}
