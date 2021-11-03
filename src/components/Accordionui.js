import React from "react";
import {
  CAccordion,
  CAccordionItem,
  CAccordionHeader,
  CAccordionBody,} from "@coreui/react";

  
function Accordionui() {
  return (
    <div>
      <CAccordion activeItemKey={0}>
        <CAccordionItem itemKey={1}>
          <CAccordionHeader>Accordion Item #1</CAccordionHeader>
          <CAccordionBody>
            <strong>HIIIIII</strong> This is kalai <code> Working in react </code>
          in UI developer
          </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem itemKey={2}>
          <CAccordionHeader>Accordion Item #2</CAccordionHeader>
          <CAccordionBody>
            <strong>Hello !</strong> Im kiran<code>Angular Developer</code>,
           UI Developer
          </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem itemKey={3}>
          <CAccordionHeader>Accordion Item #3</CAccordionHeader>
          <CAccordionBody>
            <strong>Hey </strong> Im Ravi  <code>Node Js Developer </code>,
          Backend Developer
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
    </div>
  );
}

export default Accordionui;
