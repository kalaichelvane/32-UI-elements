import React from "react";
import Logo from "./Logo";
import { BsSearch } from "react-icons/bs";
import { CgHeart } from "react-icons/cg";
import { RiShoppingBagLine } from "react-icons/ri";


function Nav() {
  return (
    <div className="container-fluid dfc">
      <div className="dfr">
        <div>
          <Logo />
        </div>
        {/* </div> */}
        <div className="dfr" style={{ paddingLeft: "90px", marginLeft:"300px", marginTop: "60px",}}>
          <div className="tablinks" style={{cursor:"pointer" }}><strong> MEN </strong> &nbsp;&nbsp;&nbsp;</div>
          <div className="tablinks" style={{cursor:"pointer"}}> <strong>WOMEN </strong> &nbsp;&nbsp;&nbsp;</div>
          <div className="tablinks" style={{cursor:"pointer"}}> <strong> KIDS </strong> &nbsp;&nbsp;&nbsp;</div>
          <div className="tablinks" style={{cursor:"pointer"}}> SPORTS  &nbsp;&nbsp;&nbsp;</div>
          <div className="tablinks" style={{cursor:"pointer"}}> BRANDS  &nbsp;&nbsp;&nbsp;</div>
          <div className="tablinks" style={{cursor:"pointer"}}> COLLECTIONS  &nbsp;&nbsp;&nbsp;</div>
          <div className="tablinks" style={{cursor:"pointer"}}> OUTLET </div>
        </div>
        <div className="dfc">
          <div className="dfr">
            <div
              style={{
                marginTop: "5px",
                cursor: "pointer", marginLeft:"100px"
              }}
            >
              {" "}
              help &nbsp;&nbsp;
            </div>
            <div style={{ marginTop: "5px", cursor: "pointer" }}>
              returns &nbsp;&nbsp;&nbsp;
            </div>
            <div style={{ marginTop: "5px", cursor: "pointer" }}>
              order traker &nbsp;&nbsp;&nbsp;
            </div>
            <div style={{ marginTop: "5px", cursor: "pointer" }}>
              sign up &nbsp;&nbsp;&nbsp;
            </div>
            <div style={{ marginTop: "5px", cursor: "pointer" }}>log in</div>
          </div>
          <div className="dfr" style={{marginLeft:"100px",marginTop:"27px"}}>
              <input type=" "  className="searchinput" placeholder="Search">   
              </input> <BsSearch className="search"/> 
              <CgHeart className="heart"/>
              <RiShoppingBagLine className="bag"/>

              </div>
              <div>
              </div>
              
            {/* <div style={{marginLeft:"220px", marginBottom:"80px"}}> */}
                {/* </div>     */}
        
        </div>
      </div>
    </div>
  );
}

export default Nav;
