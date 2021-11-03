import React from 'react'
import "./Maxis.css"
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
function Header() {
    return (
        <div className="header-info" >
            <BsThreeDotsVertical  className="dot"/> 

            <div>
               <p style={{marginLeft:"430px",color:"white",marginTop:"-24px",fontFamily:"Maxis, sans-serif",fontSize:"16px",fontWeight:"400"}}>
               Click <u style={{cursor:"pointer"}}>here</u> for stores with 100% vaccination status. See you soon !</p> 
               
                <IoCloseOutline  className="close"/>

             </div>
           
        </div>
    )
}

export default Header
