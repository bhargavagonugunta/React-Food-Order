import React, { useEffect, useState } from "react";
import { findRestro } from "../utils/helpers";
import RestarentCard from "./RestroCard";
import Simmer from "./Simmer";




const Body =()=>{
const [allRestro,setallRestro]= useState([])    
const [searchtext,setsearchtext] = useState("");
const [Restrolist,setRestrolist]=useState([]);
const [isVisible, setIsVisible] = useState(false);

useEffect(()=>{
    GetRestro();
},[searchtext]);

async function GetRestro(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4434646&lng=78.3771953&page_type=DESKTOP_WEB_LISTING")
    const datajson = await data.json();
    setRestrolist(datajson?.data?.cards[2]?.data?.data?.cards)
    setallRestro(datajson?.data?.cards[2]?.data?.data?.cards)
}
if(allRestro.length===0){
    return (<Simmer />)
}

return  ( <>
    <div >
        <input type="text"
        className="bg-slate-200 ml-4  shadow-2xl rounded-xl px-2 "
        placeholder="Search"
        value={searchtext}
        onChange ={(e)=>{
        setsearchtext(e.target.value)}}
        />
        {searchtext}
        <button className="bg-blue-300 w-20 hover:bg-blue-700 ml-3 rounded-xl m-2" onClick={()=> {
            const deeta = findRestro(allRestro,searchtext)
            setRestrolist(deeta)
        }}>Search </button>
    </div>
        <div className="flex flex-wrap">
              
            { Restrolist.map( (Restro)=>{
                return (<RestarentCard {...Restro.data} key ={Restro.data.id} />)
               
        } )}
        </div>
        </>
    )
     
}

export default Body;