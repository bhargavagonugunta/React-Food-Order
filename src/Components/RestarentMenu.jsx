import { useEffect } from "react";
import { useParams } from "react-router-dom"
import useRestroMenu from "../utils/useRestroMenu";
import { CLOUD_IMG, RESTRO_MENU } from "./Constatns";

const RestarentMenu =()=>{
    const {Restid} =useParams();
    //const kid = 70704;

    const restrarentMenu= useRestroMenu(parseInt( Restid));
    console.log(restrarentMenu)
    console.log(Restid)
   
    return (
        <div className="Restro-menu">
            <div>
            <h1>Restorent Number: {Restid}</h1>
            <h2>{restrarentMenu?.name}</h2>
            <img src={CLOUD_IMG+RestarentMenu?.card?.card?.cloudinaryImageId} />
            <ul>{RestarentMenu[1].card.card.itemCards.map((restro)=>{
                return(<li >{restro.info.name}  </li>)
            })}</ul>
            <h2></h2>
            </div>
            <div>
                <h1>Menu</h1>
                <ul >
                   
                </ul>
            </div>


        </div>

    )

}
export default RestarentMenu;