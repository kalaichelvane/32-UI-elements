import React, {useState, useRef} from 'react'
import { CAccordion,CAccordionItem,CAccordionHeader,CAccordionBody } from '@coreui/react';
import { CBreadcrumb,CBreadcrumbItem } from '@coreui/react';
import { CButton } from '@coreui/react';
import { CCard,CCardImage,CCardBody,CCardText } from '@coreui/react';
import { CCarousel,CCarouselItem,CImage } from '@coreui/react';
import { CDropdown,CDropdownToggle,CDropdownMenu,CDropdownItem } from '@coreui/react';
import { GrReactjs } from "react-icons/gr";
import { FaAngular, FaCalendar } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { CModal,CModalHeader,CModalTitle,CModalBody,CModalFooter } from '@coreui/react';
import { CToast,CToastHeader,CToastBody,CToaster } from '@coreui/react';
import { CPagination,CPaginationItem } from '@coreui/react';
import { Slider, Stepper } from '@mui/material';
import Calender from './Calendar';
import { CProgress,CProgressBar } from '@coreui/react';
import {  } from '@coreui/react';
import Sider1 from './Sider1';
import Pointer from './Pointer';
import Tag from './Tag';
import { CTooltip } from '@coreui/react';




function Example() {
    const [toast, addToast] = useState(0)
    const toaster = useRef()
    const exampleToast = (
      <CToast title="CoreUI for React.js">
      <CToastHeader close>
      <svg
        className="rounded me-2"
        width="20"
        height="20"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
        role="img"
      >
      <rect width="100%" height="100%" fill="#007aff"></rect>
      </svg>
      <strong className="me-auto">KPOST </strong>
      <small>1 min ago</small>
      </CToastHeader>
      <CToastBody>Hello DEVELOPERS! This is a message from Kpost</CToastBody>
      </CToast>
    )

    return (
        <div >
            <h1 style={{textAlign:"center",color:"red"}}> ACCORDION</h1><br/>
            <div>
                <CAccordion style={{width:"350px",marginLeft:"38rem"}}>
                <CAccordionItem itemKey={1}>
                <CAccordionHeader>
                Accordion Item #1
                </CAccordionHeader>
                <CAccordionBody>
                <strong>Vairamuthu.</strong> He is a TL. <code> He is a developer</code>  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={2}>
                <CAccordionHeader>
                Accordion Item #2
                </CAccordionHeader>
                <CAccordionBody>
                <strong>Ramesh</strong> He is a Assistant (TL) <code>He is a developer</code> 
                </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={3}>
                <CAccordionHeader>
                Accordion Item #3
                </CAccordionHeader>
                <CAccordionBody>
                <strong>Jai Balaji</strong> He is a Senior React Developer <code>He is  Great</code>
                </CAccordionBody>
                </CAccordionItem>
                </CAccordion>
           </div><br/>


           <div>
                <h1 style={{textAlign:"center",color:"red"}}>BENTOMENU ICON </h1>
                <img src="https://static.thenounproject.com/png/756729-200.png" style={{marginLeft:"43rem"}}/>
           </div>


           <div  >
                <h1 style={{textAlign:"center",color:"red"}}> BREADCRUMB</h1><br/>
                <CBreadcrumb style={{paddingLeft:"36rem"}}>
                <CBreadcrumbItem href="#">Project Leader</CBreadcrumbItem>
                <CBreadcrumbItem href="#">Business Analyst</CBreadcrumbItem>
                <CBreadcrumbItem href="#">Team Leader</CBreadcrumbItem>
                <CBreadcrumbItem active>Staffs</CBreadcrumbItem>
                </CBreadcrumb>
           </div><br/>

           
           <div>
                <h1 style={{textAlign:"center",color:"red"}}> BUTTONS</h1><br/>
                <CButton color="primary" style={{marginLeft:"36rem"}} >Primary</CButton>
                <CButton color="secondary">Secondary</CButton>
                <CButton color="success">Success</CButton>
                <CButton color="danger">Danger</CButton>
                <CButton color="warning">Warning</CButton>
           </div><br/>

           
           <div>
                <h1 style={{textAlign:"center",color:"red"}}>CARD</h1><br/>
                <CCard style={{ width: '18rem',marginLeft:"41rem" }}>
                <CCardImage orientation="top" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
                <CCardBody>
                <CCardText style={{color:"blue"}}> 
                Vairamuthu and Ramesh is a Great Developers 
                </CCardText>
                <CButton>
                    Click
                </CButton>
                </CCardBody>
                </CCard>
           </div><br/>

           
           <div>
               <h1 style={{textAlign:"center",color:"red"}}>CAROUSEL</h1>
                <CCarousel controls indicators style={{width:"550px",marginLeft:"33rem"}}>
                <CCarouselItem>
                <CImage className="d-block w-100" src="https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2020/07/solar_orbiter_s_first_view_of_the_sun2/22133123-1-eng-GB/Solar_Orbiter_s_first_view_of_the_Sun_pillars.png" alt style={{height:"600px"}}/>
                </CCarouselItem>
                <CCarouselItem> 
                <CImage className="d-block w-100" src="https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2020/07/solar_orbiter_s_first_view_of_the_sun2/22133123-1-eng-GB/Solar_Orbiter_s_first_view_of_the_Sun_pillars.png " alt style={{height:"600px"}} />
                </CCarouselItem>
                <CCarouselItem>
                <CImage className="d-block w-100" src="https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2020/07/solar_orbiter_s_first_view_of_the_sun2/22133123-1-eng-GB/Solar_Orbiter_s_first_view_of_the_Sun_pillars.png " alt style={{height:"600px"}} />
                </CCarouselItem>
                </CCarousel>
           </div><br/>


           <div>
                <h1 style={{textAlign:"center",color:"red"}}>CHECKBOX</h1>
                <input type="checkbox" id="cb" style={{marginLeft:"45rem"}}></input>
                &nbsp;&nbsp;&nbsp; ANGULAR <br/>
                <input type="checkbox" id="cb" style={{marginLeft:"45rem"}}></input>
                &nbsp;&nbsp;&nbsp; REACT <br/>
                <input type="checkbox" id="cb" style={{marginLeft:"45rem"}}></input>
                &nbsp;&nbsp;&nbsp; VUE 
           </div><br/>


           <div>
                <h1 style={{textAlign:"center",color:"red"}}>COMMENT</h1>
                <textarea name="message"  style={{marginLeft:"44rem"}}></textarea>
           </div><br/>


           <div>
               <h1 style={{textAlign:"center",color:"red"}}>DONERMENU ICON </h1>
                <img src="https://static.thenounproject.com/png/2392241-200.png" style={{marginLeft:"44rem"}}/>
           </div>


           <div>
                <h1 style={{textAlign:"center",color:"red"}}>DROPDOWN</h1> <br/>
                <CDropdown style={{marginLeft:"45rem"}}>
                <CDropdownToggle color="secondary">DEVELOPERS</CDropdownToggle>
                <CDropdownMenu>
                <CDropdownItem href="#">RAMESH KAMARAJ</CDropdownItem>
                <CDropdownItem href="#">VAIRAMUTHU </CDropdownItem>
                <CDropdownItem href="#">SAKTHI NAVEEN</CDropdownItem>
                </CDropdownMenu>
                </CDropdown>
           </div><br/><br/><br/>


           <div>
                <h1 style={{textAlign:"center",color:"red"}}>HAMBURGERMENU ICON</h1><br/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzTYNkRiUUcERdvChDIzGllFZ5AOI-PIWyVQ&usqp=CAU" alt style={{marginLeft:"42rem"}} />
           </div><br/>


           <div>
                <h1 style={{textAlign:"center",color:"red"}}>ICONS</h1> <br/>
                <GrReactjs style={{marginLeft:"41rem",fontSize:"50px",color:"green"}}/>
                <FaAngular style={{marginLeft:"3rem",fontSize:"50px",color:"blue"}}/>
                <FaVuejs style={{marginLeft:"3rem",fontSize:"50px",color:"red"}}/>
           </div><br/><br/><br/>


           <div>
                <h1 style={{textAlign:"center",color:"red"}}>INPUTFIELDS</h1><br/>
                <label for="uname" style={{marginLeft:"45rem",fontSize:"25px"}}>USER NAME :</label><br/><br/>
                <input type="text" style={{marginLeft:"44rem",color:"white",backgroundColor:"green"}}></input>
           </div><br/><br/>


           <div>
                <h1 style={{textAlign:"center",color:"red"}}>KEBABMENU ICON</h1><br/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPr08hvq-vEq_QMjhbRIjxPz-4b3zu85UV3w&usqp=CAU" style={{marginLeft:"44rem"}}/>
           </div><br/>
            

            <div>
                <h1 style={{textAlign:"center",color:"red"}}>LOADER</h1><br/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBBBfzH9jDX7t1C6h5vqVHh0CZfd_TOB7Ocw&usqp=CAU" style={{marginLeft:"44rem"}}/>
            </div><br/>
       
            <div>
                <h1 style={{textAlign:"center",color:"red"}}>MEATBALLS MENU ICON</h1>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStKIGQMVT5prp5PiP5LGJYgS8tAU0eANvbkA&usqp=CAU" style={{marginLeft:"42rem"}}/>
            </div>


            <div>
                <h1 style={{textAlign:"center",color:"red"}}>MODAL</h1>
                <CModal className="show d-block position-static"
                        backdrop={false}
                        keyboard={false}
                        portal={false}
                        visible
                >
                <CModalHeader>
                <CModalTitle> DEVELOPERS</CModalTitle>
                </CModalHeader>
                <CModalBody> All the staffs are dedicated developers</CModalBody>
                <CModalFooter>
                <CButton color="secondary">Close</CButton>
                <CButton color="primary">Save changes</CButton>
                </CModalFooter>
                </CModal>
            </div>


            <div>
                <h1 style={{textAlign:"center",color:"red"}}>NOTIFICATION</h1><br/>
                <CToast >
                <CToastBody>Hello, world! This is a toast message.</CToastBody>
                </CToast>
                <CButton style={{marginLeft:"45rem"}} onClick={() => addToast(exampleToast)}>Send a toast</CButton>
                <CToaster ref={toaster} push={toast} placement="top-end" />
            </div><br/>


            <div>
                <h1 style={{textAlign:"center",color:"red"}}>PAGINATION</h1><br/>
                <CPagination style={{marginLeft:"40rem"}} aria-label="Page navigation example">
                <CPaginationItem>Previous</CPaginationItem>
                <CPaginationItem>1</CPaginationItem>
                <CPaginationItem>2</CPaginationItem>
                <CPaginationItem>3</CPaginationItem>
                <CPaginationItem>4</CPaginationItem>
                <CPaginationItem>5</CPaginationItem>
                <CPaginationItem>Next</CPaginationItem>
                </CPagination>
            </div>


            <div>
                <h1 style={{textAlign:"center",color:"red"}}>CALENDAR PICKER</h1><br/>
                 <div style={{marginLeft:"43rem"}}>
               <Calender />
               </div>
            </div><br/>


            <div>
               
                <h1 style={{textAlign:"center",color:"red"}}>PROGRESS</h1><br/>
               <div style={{width:"350px",marginLeft:"650px"}}>
                <CProgress  className="mb-3" >
                <CProgressBar value={66}>66%</CProgressBar>
                </CProgress><br/>
            </div>
            </div>


            <div>
                <h1 style={{textAlign:"center",color:"red"}}>RADIO BUTTON</h1>
                <input type="radio" id="cb" style={{marginLeft:"45rem"}}></input>
                &nbsp;&nbsp;&nbsp; ANGULAR <br/>
                <input type="radio" id="cb" style={{marginLeft:"45rem"}}></input>
                &nbsp;&nbsp;&nbsp; REACT <br/>
                <input type="radio" id="cb" style={{marginLeft:"45rem"}}></input>
                &nbsp;&nbsp;&nbsp; VUE 
            </div>


            <div>
                <h1 style={{textAlign:"center",color:"red"}}>SEARCH FIELD </h1>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVvC0-24VSurFJauapcIMLY-f5HFWt7zSdYw&usqp=CAU" style={{marginLeft:"40rem"}} />
            </div><br/>




            <div>
                <h1 style={{textAlign:"center",color:"red"}}>SIDE BAR </h1>
                <Sider1/>
            </div><br/>


            <div>
                <h1 style={{textAlign:"center",color:"red"}}>SLIDER CONTROLS</h1><br/>
                <div style={{width:"350px",marginLeft:"620px"}}>
                <Slider/>
                </div>
            </div><br/>


            <div>
                <h1 style={{textAlign:"center",color:"red"}}>STEPPER</h1>
              <Pointer/>
            </div>

            <div>
                <h1 style={{textAlign:"center",color:"red"}}>Tag</h1><br/>
                <Tag />
            </div><br/><br/>

            <div>
               <h1 style={{textAlign:"center",color:"red"}}>TOOLTIP</h1><br/>
                <CTooltip 
                content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                placement="top"
                >
                <CButton color="secondary" style={{marginLeft:"32em"}}>Tooltip on top</CButton>
                </CTooltip>
                <CTooltip
                content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                placement="right"
                >
                <CButton color="secondary">Tooltip on right</CButton>
                </CTooltip>
                <CTooltip
                content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                placement="bottom"
                >
                <CButton color="secondary">Tooltip on bottom</CButton>
                </CTooltip>
                <CTooltip
                content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                placement="left"
                >
                <CButton color="secondary">Tooltip on left</CButton>
                </CTooltip>
            </div><br/><br/><br/>
        </div>
    )
}

export default Example