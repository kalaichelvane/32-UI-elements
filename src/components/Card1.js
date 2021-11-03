import React from "react";
import {
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
} from "@coreui/react";
import parent from "../assets/parents.jpg";
import { green } from "@mui/material/colors";

function Card1() {
  return (
    <div  style={{ marginTop: "64px",marginLeft:"666px" }}>  
      {" "}
     
      <CCard style={{ width: "18rem" }}>
        <CCardImage orientation="top" src={parent} />
        <CCardBody>
          <CCardTitle>FAMILY</CCardTitle>
          <CCardText>
         
          hi how r u,i like my parents
          </CCardText>
          <CButton href="#">Go somewhere</CButton>
        </CCardBody>
      </CCard>
    </div>
  );
}

export default Card1;
