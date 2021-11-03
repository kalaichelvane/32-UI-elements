import { render } from "@testing-library/react";
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Input, Label, FormGroup, Form } from 'reactstrap';


function Calculator() {
  const [counta, setCounta] = useState("");
  const [countb, setCountb] = useState("");
  const [res, setres]       = useState("");

  return (

     <Form >

      <h1 style={{color:"red"}}> Calculator </h1> <br />


      <div className="calc1">

      <FormGroup>
      <Label for="Input A"> Input A </Label> <br />
      <Input type="number" onChange={(event) => { setCounta(event.target.value); }} id="Input A" name="Input A" /> <br /> <br />
      </FormGroup>

      </div>
        
      <div className="calc2"> 

      <FormGroup>     
      <Label for="Input B"> Input B </Label> <br />
      <Input type="number" onChange={(event) => { setCountb(event.target.value); }} id="Input B" name="Input B" /> <br /> <br /> 
      </FormGroup>

      </div>

      <div className="button">

      <Button color="primary"  onClick={() => { setres(eval(`${counta} + ${countb}`)); }} >  {" "} + {" "}  </Button> {" "} &nbsp;
      
      <Button color="warning"  onClick={() => { setres(eval(counta     - countb)); }} >      {" "} - {" "}  </Button> {" "} &nbsp;

      <Button color="success"  onClick={() => { setres(eval(counta     * countb)); }} >      {" "} * {" "}  </Button> {" "} &nbsp;

      <Button color="info"     onClick={() => { setres(eval(counta     / countb)); }} >      {" "} / {" "}  </Button> {" "} &nbsp; <br /> <br /> <br />

      </div>


      <div className="output">

      <Label for="Output"> OUTPUT  : </Label> <br/>
      <Input type="number" value={res} />

      </div>

    </Form>
    
    

  );
}

export default Calculator;