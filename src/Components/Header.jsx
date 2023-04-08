import React from "react";
import { RestrotCard } from "./constants";
import RestarentCard from "./RestroCard";

const Header= ()=>{
    return (
        <div className="Head">{ RestrotCard.map( (Restro)=>{
                return <RestarentCard {...Restro.data}/>
        } )}
        </div>
        
    );
}
export default Header;