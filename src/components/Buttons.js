import React from "react";
import{ CButton} from '@coreui/react';
import { AiFillApple } from "react-icons/ai";
import { BsFillAlarmFill } from "react-icons/bs";
import { IoAirplaneSharp } from "react-icons/io5";
import { SiAdblock } from "react-icons/si";
import { ImConnection } from "react-icons/im";

function Buttons() {
  return (
    <div>
        <BsFillAlarmFill className="alarm"/>
        <AiFillApple className="apple"/>
      <CButton color="primary" disabled>
        Primary
      </CButton>
      <CButton color="secondary">Secondary</CButton>
      <CButton color="success">Success</CButton>
      <CButton color="danger">Danger</CButton>
      <CButton color="warning">Warning</CButton>

      <ImConnection className="wifi"/>

      <CButton color="info">Info</CButton>
      <CButton color="light">Light</CButton>
      <CButton color="dark">Dark</CButton>
      <CButton color="link">Link</CButton>

       <IoAirplaneSharp className="aero"/>
       <SiAdblock className="stop"/>
    </div>
  );
}

export default Buttons;
