import React from "react"
import { Link } from "react-router-dom";

const Title = ()=>(
    <a href="/">
<img className="h-20 p-2 " alt="logo" src="https://img.freepik.com/free-vector/digital-global-connection-network-technology-background_1017-23324.jpg?w=360" />
</a>
)

const Headline=()=>{
    return (
      <div  className="flex justify-between bg-gray-300 shadow-lg ">
          <Title />
      <ul className="flex py-6 px-4">
          <li className="px-2"><Link to ="/" > Home </Link></li>
          <li className="px-2">Products</li>
          <li className="px-2">List of servicer </li>
          <li className="px-2"> <Link to ="/About">About us </Link></li>
          <li className="px-2">Contact us</li>
     </ul>
     </div>
    )
  }
  export default Headline;