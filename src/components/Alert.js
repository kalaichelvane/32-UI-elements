import React from "react";
import { CAlert } from "@coreui/react";

const Alert1 = (props) => {
  return (
    <div>
      <CAlert color="primary">A simple primary alert—check it out!</CAlert>
      <CAlert color="secondary">A simple secondary alert—check it out!</CAlert>
      <CAlert style={{width:'fit-content',padding:0,margin:15,textAlign:'center'}} color="success">A simple success alert—check it out!</CAlert>
      <CAlert color="danger">A simple danger alert—check it out!</CAlert>
      <CAlert color="warning">A simple warning alert—check it out!</CAlert>
      <CAlert color="info">A simple info alert—check it out!</CAlert>
      <CAlert color="light">A simple light alert—check it out!</CAlert>
      <CAlert color="dark">A simple dark alert—check it out!</CAlert>
    </div>
  );
};

export default Alert1;
