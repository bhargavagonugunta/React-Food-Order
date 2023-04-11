import { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import { Link, useParams } from "react-router-dom"
import useRestroMenu from "../utils/useRestroMenu";
import { CLOUD_IMG, RESTRO_MENU } from "./Constatns";
import { render } from '@testing-library/react';
import store from "../utils/store";
import { addToCart } from "../utils/Cartslice";
const RestarentMenu =()=>{
    const {Restid} =useParams();
    //const kid = 70704;
    //const [restroMenu,setRestroMenu] = useState({});
    const restrarentMenu= useRestroMenu(parseInt( Restid));
   // console.log(restrarentMenu)
   // console.log(Restid)
    const menu = restrarentMenu[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards
  //  setRestroMenu(menu);
    //console.log(menu)
    const dispatch = useDispatch();
    
    const handleredeuser=(itam)=>{
        console.log('called')
        dispatch(addToCart(itam))
    }
   
    return (
        <div className="flex">
            <div className="">
            <h1>Restorent Number: {Restid}</h1>
            <h1 className="text-xl font-serif hover:text-cyan-400">Restorent Name:  {restrarentMenu[0]?.card?.card?.info?.name}</h1>
            <h2>{restrarentMenu?.name}</h2>
            <img className="w-[280px]" src={CLOUD_IMG+restrarentMenu[0]?.card?.card?.info?.cloudinaryImageId} />
            </div>
            <div className="ml-6 ">
            {menu?.map((restro)=>{
                const menunames= restro?.card?.info?.name
                return(<li className="hover:cursor-pointer" key={restro?.card?.info?.id} onClick={()=>handleredeuser(menunames)} >{...restro?.card?.info?.name} </li> )
            })}
            
            </div>
           

        </div>

    )

}
export default RestarentMenu;