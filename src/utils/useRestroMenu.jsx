import { useEffect, useState } from "react"
import { RESTRO_MENU } from "../Components/Constatns"

const useRestroMenu = (restid)=>{
    const [restroMenu,setRestroMenu] = useState({})
    useEffect(()=>{
        getRestroMenu()
    },[])
    async function getRestroMenu(){
        const data = await fetch(RESTRO_MENU+restid +"&submitAction=ENTER");
        const datajson = await data.json();
        setRestroMenu(datajson?.data?.cards[2]?.grouprdCard?.cardGroupMap?.REGULAR?.cards);
        console.log(datajson?.data?.cards[2]?.grouprdCard?.cardGroupMap?.REGULAR?.cards)
    }
    return restroMenu;

}
export default useRestroMenu;
