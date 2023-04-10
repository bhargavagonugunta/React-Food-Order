import { useEffect, useState } from "react"
import { RESTRO_MENU } from "../Components/Constatns"

const useRestroMenu = (restid)=>{
    const [restroMenu,setRestroMenu] = useState([])
    const reid= parseInt(restid)
    console.log('useRestro is clled')
    useEffect(()=>{
        getRestroMenu()
        console.log('euse effexr')
    },[])
    async function getRestroMenu(){
        const data = await fetch(RESTRO_MENU+reid+"&submitAction=ENTER");
        const datajson = await data.json();
        console.log(datajson)
        setRestroMenu(datajson?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
        console.log(datajson?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    }
    return restroMenu;

}
export default useRestroMenu;
