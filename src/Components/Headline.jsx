import React from "react"
import { Link , Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "../utils/store";

const Title = ()=>(
    <a href="/">
<img className="h-20 p-2 " alt="logo" src="https://img.freepik.com/free-vector/digital-global-connection-network-technology-background_1017-23324.jpg?w=360" />
</a>
)

const Headline=()=>{
    const cartitams = useSelector(store => store.cart.itams);

    return (
        <>
      <div  className="flex justify-between bg-gray-300 shadow-lg ">
          <Title />
      <ul className="flex py-6 px-4">
          <li className="px-2"><Link to ="/" > Home </Link></li>
          <li className="px-2">Products</li>
          <li className="px-2">List of servicer </li>
          <li className="px-2"> <Link to ="/About">About us </Link></li>
          <Link to="/Cart"> 
  <svg className="w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path>
  </svg>
</Link>
            <li className="">{cartitams.length}</li>
          <li className="px-2">Contact us</li>
     </ul>
     </div>
     
     </>
    )
  }
  export default Headline;