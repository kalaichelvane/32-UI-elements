import { border } from '@mui/system';
import React from 'react'
import { BsBorderRight } from 'react-icons/bs';
import { GrCart } from "react-icons/gr";
import { HiDotsVertical } from 'react-icons/hi';

function Sub() {
    return (
        <div className="sub">

            <div style={{color:"rgb(17, 94, 103)",fontFamily:"Maxis, sans-serif",fontSize:"15px",marginLeft:"150px",fontWeight:"500",marginTop:"20px",cursor:"pointer" }}>
            <div style={{marginTop:"0px"}}><b >consumer</b></div>
            </div>

            <div style={{marginTop:"-21px",marginLeft:"270px",fontFamily:"Maxis, sans-serif",fontSize:"15px",color:"rgb(17, 94, 103)",fontWeight:"700",opacity:"0.5",cursor:"pointer"}}>
            <p> business  </p>
            </div>

            <div  style={{marginTop:"-37px",marginLeft:"360px",fontFamily:"Maxis, sans-serif",fontSize:"15px",color:"rgb(17, 94, 103)",fontWeight:"700",cursor:"pointer",opacity:"0.5px"}}>  
              <p>   hotlink</p>
              </div>

            <GrCart style={{ marginLeft:"1000px",fontSize: "20px",marginTop:"-70px",color:"rgb(17, 94, 103)",cursor:"pointer"}} />
        
           

            <div>   
            <p style={{marginLeft:"1025px",fontFamily:"Maxis, sans-serif",color:"rgb(17, 94, 103)",fontWeight:"800",fontSize:"15px",marginTop:"-56px",cursor:"pointer"}}> cart</p>
            </div>

            <div className="add">
            <img src="https://www.maxis.com.my/content/dam/mxs/rebrand/header-icons/order-tracker.svg" />
            </div>


            <div>
            <p style={{marginLeft:"1115px",fontFamily:"Maxis, sans-serif",fontWeight:"800",color:"rgb(17, 94, 103)",fontSize:"15px",marginTop:"-7px",cursor:"pointer"}}> delivery tracker </p>
            </div>

            <div className="admin">
            <img src="https://www.maxis.com.my/content/dam/mxs/rebrand/header-icons/account.svg" />
            </div>

            <div>
            <p style={{marginLeft:"1304px",fontFamily:"Maxis, sans-serif",fontWeight:"800",color:"rgb(17, 94, 103)",fontSize:"15px",marginTop:"-8px",cursor:"pointer"}}> login </p>
            </div>

            <div>
            <p style={{marginLeft:"1380px",fontFamily:"Maxis, sans-serif",fontWeight:"800",color:"rgb(17, 94, 103)",fontSize:"15px",marginTop:"-38px",cursor:"pointer"}}>en  |  </p>
            </div>

            <div className="bm">
            <p >  bm </p>
            </div>

         
        </div>
    )
}

export default Sub
