import { useEffect } from "react";
import { useParams } from "react-router-dom"
import useRestroMenu from "../utils/useRestroMenu";
import { CLOUD_IMG, RESTRO_MENU } from "./Constatns";

const RestarentMenu =()=>{
    const {Restid} =useParams();
    const kid = 70704;

    const restrarentMenu= useRestroMenu(kid);

   
    return (
        <div className="Restro-menu">
            <div>
            <h1>Restorent Number: {Restid}</h1>
            <h2>{restrarentMenu?.name}</h2>
            <img src={CLOUD_IMG+RestarentMenu?.cloudinaryImageId} />
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