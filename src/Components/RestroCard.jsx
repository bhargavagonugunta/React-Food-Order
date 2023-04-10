import React from "react"
import { Link } from "react-router-dom";
import { RestrotCard } from "./constants";
import { RESTRO_MENU } from "./Constatns";
const RestarentCard = ({name,cuisines,cloudinaryImageId,ratings,id})=>{
    return (
        <div className="w-[200px] p-4 m-2 rounded-lg shadow-2xl bg-purple-100 hover:bg-purple-300 hover:z-10 hover:cursor-pointer">
            < img className="" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/" + cloudinaryImageId} />
            <Link to={`/RestaurantMenu/${id}`}> <h3>{name}</h3> </Link>
            <h4>{cuisines.join(",  ")}</h4>
            <h5>{ratings}</h5>
        </div>
    )
}
  export default RestarentCard;