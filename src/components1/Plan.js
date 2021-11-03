import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { CCarousel,CCarouselItem,CImage } from '@coreui/react';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { CCard,CCardImage,CCardBody,CCardTitle,CCardText, } from '@coreui/react';
import { fontFamily } from '@mui/system';
import { Button } from 'bootstrap';


function Plan() {
    return (
        <div>
            <div>
            <p style={{fontFamily:"Maxis, sans-serif",cursor:"pointer",fontWeight:"700",fontSize:"14px",letterSpacing:"1px",marginTop:"30px",marginLeft:"150px"}}>  

            MOBILE PLANS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; BROADBAND &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DEVICES &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; LIFESTYLE </p>

            <div>
            <AiOutlineSearch className="search"/>
            </div>
            
            <div>
            <p style={{marginTop:"-60px",marginLeft:"700px",fontFamily:"Maxis, sans-serif",cursor:"pointer",color:"rgb(141, 142, 151)",fontSize:"15px",fontWeight:"400"}}> 
            
            search for iphone offers </p>
            </div>
            
            <div>
             <hr style={{width:"158px",marginLeft:"700px",marginTop:"-15px"}}/>
             </div>

                <div>
                <img  className="image"    
                 img src="https://www.maxis.com.my/content/dam/mxs/rebrand/maxis-logo.png">

                </img>
                </div>
                 

                <div>
                <CCarousel controls indicators>
                <CCarouselItem>
                    <CImage className="d-block w-100" src="https://www.maxis.com.my/content/dam/mxs/images/rebrand/devices/samsung-galaxy/samsung-galaxy-z-series-herobanner-desktop.jpg" alt style={{height:"350px",width:"500px"}} />
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100" src="https://www.maxis.com.my/content/dam/mxs/images/rebrand/devices/brands/apple/iphone-13/pre-order/herobanner-desktop.jpg" alt style={{height:"350px"}} />
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100" src="https://www.maxis.com.my/content/dam/mxs/images/rebrand/devices/zerolution/herobanner-desktop.jpg" alt style={{height:"350px"}}/>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100" src="https://www.maxis.com.my/content/dam/mxs/images/rebrand/devices/mbs/maxis-biggest-sale-herobanner-desktop.jpg" alt style={{height:"350px"}} />
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100" src="https://www.maxis.com.my/content/dam/mxs/images/rebrand/mobile-plans/family-plan/herobanner-desktop.jpg" alt style={{height:"350px"}} />
                </CCarouselItem>
                </CCarousel>
                </div><br/><br/>

                <div className="lat">
                <h1> Latest<br/> devices -</h1>
                </div>

                <div className="view">
                    VIEW ALL 
                </div>
             
                <div>
                <HiOutlineArrowNarrowRight  className="arrow"/>
                </div>              
  
              
                 <div style={{marginLeft:"320px",marginTop:"-150px"}}>
           
                <CCard style={{width:"19rem",height:"330px",borderRadius:"12px",backgroundColor:"rgb(255, 255, 255)",cursor:"pointer"}}>
                <p style={{textAlign:"center",fontFamily:"Maxis, sans-serif",fontize:"1px",fontWeight:"400",color:"rgb(0, 86, 179)",border:"2px"}}>
                     REGISTER INTEREST</p>
                <p style={{backgroundColor:"rgb(255, 255, 255)",color:"grey",marginLeft:"185px",marginTop:"60px"}}> 
                    APPLE </p>
                <h2 style={{marginLeft:"155px",fontFamily:"Maxis, sans-serif",fontSize:"25px"}}>
                    <b>iphone 13<br/> pro max </b></h2>
                <CCardImage orientation="top"  src="https://www.maxis.com.my/content/dam/mxs/images/rebrand/devices/brands/apple/iphone-13/13-pro-max-front.png" alt style={{height:"250px",width:"155px",marginTop:"-180px"}}/> <br/>
                <p style={{color:"rgb(17, 94, 103)",fontFamily:"Maxis, sans-serif",fontWeight:"bold",marginLeft:"10px",marginTop:"25px"}}> zerolution from <br/>RM 115/mth</p>
                <button style={{borderRadius:"15px 0px",backgroundColor:"rgb(64, 199, 6)",color:"white",width:"150px",marginTop:"-80px",marginLeft:"152px",height:"180px"}}>
                    FIND OUT MORE</button>
                
                </CCard>
      </div>

      <div style={{marginLeft:"660px",marginTop:"-330px"}}>
           
           <CCard style={{width:"19rem",height:"330px",borderRadius:"12px",backgroundColor:"rgb(255, 255, 255)",cursor:"pointer"}}>
           <p style={{textAlign:"center",fontFamily:"Maxis, sans-serif",fontize:"1px",fontWeight:"400",color:"rgb(0, 86, 179)",border:"2px"}}>
                REGISTER INTEREST</p>
           <p style={{backgroundColor:"rgb(255, 255, 255)",color:"grey",marginLeft:"185px",marginTop:"60px"}}> 
               APPLE </p>
           <h2 style={{marginLeft:"155px",fontFamily:"Maxis, sans-serif",fontSize:"25px"}}>
               <b>iphone 13<br/> pro </b></h2>
           <CCardImage orientation="top"  src="https://www.maxis.com.my/content/dam/mxs/images/rebrand/devices/brands/apple/iphone-13/13-pro-front.png " alt style={{height:"250px",width:"155px",marginTop:"-180px"}}/> <br/>
           <p style={{color:"rgb(17, 94, 103)",fontFamily:"Maxis, sans-serif",fontWeight:"bold",marginLeft:"15px",marginTop:"25px"}}> zerolution from <br/>RM 105/mth</p>
           <button style={{borderRadius:"15px 0px",backgroundColor:"rgb(64, 199, 6)",color:"white",width:"150px",marginTop:"-80px",marginLeft:"152px",height:"180px"}}>
               FIND OUT MORE</button>
           
           </CCard>
        </div>
               

           <div style={{marginLeft:"990px",marginTop:"-330px"}}>
           
           <CCard style={{width:"19rem",height:"330px",borderRadius:"12px",backgroundColor:"rgb(255, 255, 255)",cursor:"pointer"}}>
           <p style={{textAlign:"center",fontFamily:"Maxis, sans-serif",fontize:"1px",fontWeight:"400",color:"rgb(0, 86, 179)",border:"2px"}}>
                REGISTER INTEREST</p>
           <p style={{backgroundColor:"rgb(255, 255, 255)",color:"grey",marginLeft:"185px",marginTop:"60px"}}> 
               APPLE </p>
           <h2 style={{marginLeft:"155px",fontFamily:"Maxis, sans-serif",fontSize:"25px"}}>
               <b>iphone 13 </b></h2>
           <CCardImage orientation="top"  src=" https://www.maxis.com.my/content/dam/mxs/images/rebrand/devices/brands/apple/iphone-13/13-front.png" alt style={{height:"250px",width:"155px",marginTop:"-150px"}}/> <br/>
           <p style={{color:"rgb(17, 94, 103)",fontFamily:"Maxis, sans-serif",fontWeight:"bold",marginLeft:"15px",marginTop:"25px"}}> zerolution from <br/>RM 105/mth</p>
           <button style={{borderRadius:"15px 0px",backgroundColor:"rgb(64, 199, 6)",color:"white",width:"150px",marginTop:"-80px",marginLeft:"152px",height:"180px"}}>
               FIND OUT MORE</button>
           
           </CCard>
           </div>

           <div>
           <img  
                 img src="https://www.maxis.com.my/content/dam/mxs/icons/rebrand/chevron-next-plancard-expand.svg " alt style={{marginLeft:"83rem",marginTop:"-340px"}}>

                </img>
           </div><br/><br/><br/>



            <div className="bgcolor" >


            <div >
                <h3 style={{color:"rgb(17, 94, 103)",fontSize:"35px",fontFamily:"Maxis, sans-serif",fontWeight:"800",marginLeft:"150px",marginTop:"30px"}}>
                     Let's get <br/> ahead -</h3>
            </div>
         
            <div>
            <CCard style={{width:"25rem",marginLeft:"150px",height:"190px",cursor:"pointer",borderRadius:"opx 0px"}} >

            <CCardImage orientation="top"  src="https://www.maxis.com.my/content/dam/mxs/images/rebrand/mobile-plans/switch-to-maxis/content-card.jpg" alt style={{height:"200px"}}/>
            
            </CCard >
            </div>
         
            <div>
            <CCard style={{width:"25rem",marginLeft:"575px",height:"190px",marginTop:"-190px",cursor:"pointer"}} >

            <CCardImage orientation="top"  src="https://www.maxis.com.my/content/dam/mxs/rebrand/homepage/homepage-content-card/maxis-postpaid.jpg" alt style={{height:"200px"}}/>
            
            </CCard >
            </div>

            <div>
            <CCard style={{width:"25rem",marginLeft:"62.5rem",height:"190px",marginTop:"-190px",cursor:"pointer"}} >

            <CCardImage orientation="top"  src="https://www.maxis.com.my/content/dam/mxs/images/rebrand/lifestyle/entertainment/maxis-tv-2-0/launch/ganjil-campaign/content-card.jpg " alt style={{height:"200px"}}/>
            
            </CCard >
            </div>

            <div>
            <CCard style={{width:"22rem",marginLeft:"175px",height:"200px",marginTop:"-20px",borderRadius:"opx",cursor:"pointer",borderTop:"5px solid rgb(64, 199, 6)",borderLeft:"none",borderRight:"none",borderBottom:"none"}} ><br/>
           <h5 style={{color:"rgb(17, 94, 103)",fontFamily:"Maxis, sans-serif",fontWeight:"700",marginLeft:"18px"}}> 
           Switch to Maxis, the No. 1 <br/> Network in Malaysia</h5>
           <p style={{marginLeft:"15px",fontFamily:"Maxis, sans-serif",fontSize:"14px",color:"#3e4a56",fontWeight:"300"}}> 
           Enjoy the best mobile and fibre experience on our 5G-ready network.</p><br/>
           <p style={{ color:"rgb(64, 199, 6)",fontFamily:"Maxis, sans-serif",fontWeight:"800",marginLeft:"20px"}}> FIND OUT MORE </p>

           <div style={{color:"rgb(64, 199, 6)",fontSize: "30px",marginLeft:"180px",marginTop:"-55px"}}>
                <HiOutlineArrowNarrowRight />
                </div> 
            
            </CCard>
            
            </div>

            <div>
            <CCard style={{width:"22rem",marginLeft:"600px",height:"200px",marginTop:"-200px",borderRadius:"opx",cursor:"pointer",borderTop:"5px solid rgb(64, 199, 6)",borderLeft:"none",borderRight:"none",borderBottom:"none"}} ><br/>
           <h5 style={{color:"rgb(17, 94, 103)",fontFamily:"Maxis, sans-serif",fontWeight:"700",marginLeft:"18px"}}> 
           The postpaid plan that brings <br/>you 5G-Ready experience </h5>
           <p style={{marginLeft:"15px",fontFamily:"Maxis, sans-serif",fontSize:"14px",color:"#3e4a56",fontWeight:"300"}}> 
          Enjoy high-speed internet plus unlimited calls, SMS and other perks for you and your family .</p><br/>
           <p style={{ color:"rgb(64, 199, 6)",fontFamily:"Maxis, sans-serif",fontWeight:"800",marginLeft:"20px"}}> SIGN UP NOW  </p>

           <div style={{color:"rgb(64, 199, 6)",fontSize: "30px",marginLeft:"170px",marginTop:"-55px"}}>
                <HiOutlineArrowNarrowRight />
                </div> 
            
            </CCard>
            
            </div>

            <div>
            <CCard style={{width:"22rem",marginLeft:"1022px",height:"200px",marginTop:"-200px",borderRadius:"opx",cursor:"pointer",borderTop:"5px solid rgb(64, 199, 6)",borderLeft:"none",borderRight:"none",borderBottom:"none"}} ><br/>
           <h5 style={{color:"rgb(17, 94, 103)",fontFamily:"Maxis, sans-serif",fontWeight:"700",marginLeft:"18px"}}> 
         GANGIL. Now streaming on Maxis <br/> TV  </h5>
           <p style={{marginLeft:"15px",fontFamily:"Maxis, sans-serif",fontSize:"14px",color:"#3e4a56",fontWeight:"300"}}> 
          Choose between fantasy and reality, and enjoy early access to episode for FREE.</p><br/>
           <p style={{ color:"rgb(64, 199, 6)",fontFamily:"Maxis, sans-serif",fontWeight:"800",marginLeft:"20px"}}>FIND OUT MORE  </p>

           <div style={{color:"rgb(64, 199, 6)",fontSize: "30px",marginLeft:"180px",marginTop:"-55px"}}>
                <HiOutlineArrowNarrowRight />
                </div> 
            
            </CCard><br/><br/><br/><br/>
            
            </div>

            <div>
            <CCard style={{width:"25rem",marginLeft:"150px",height:"190px",cursor:"pointer",borderRadius:"opx 0px"}} >

            <CCardImage orientation="top"  src="https://www.maxis.com.my/content/dam/mxs/images/rebrand/broadband/maxis-fibre/wifi-6-router/maxis-fibre-content-card.jpg " alt style={{height:"200px"}}/>
            
            </CCard >
            </div>

            <div>
            <CCard style={{width:"25rem",marginLeft:"575px",height:"190px",cursor:"pointer",borderRadius:"opx 0px",marginTop:"-190px"}} >

            <CCardImage orientation="top"  src="https://www.maxis.com.my/content/dam/mxs/images/rebrand/campaigns/rm1-deals/post-cny/content-card.jpg " alt style={{height:"200px"}}/>
            
            </CCard >
            </div>

            <div>
            <CCard style={{width:"25rem",marginLeft:"62.5rem",height:"190px",cursor:"pointer",borderRadius:"opx 0px",marginTop:"-190px"}} >

            <CCardImage orientation="top"  src="https://www.maxis.com.my/content/dam/mxs/images/rebrand/about-maxis/maxis-network/jendela/content-card.jpg " alt style={{height:"200px"}}/>
            
            </CCard >
            </div>

            <div>
            <CCard style={{width:"22rem",marginLeft:"175px",height:"200px",marginTop:"-20px",borderRadius:"opx",cursor:"pointer",borderTop:"5px solid rgb(64, 199, 6)",borderLeft:"none",borderRight:"none",borderBottom:"none"}} ><br/>
           <h5 style={{color:"rgb(17, 94, 103)",fontFamily:"Maxis, sans-serif",fontWeight:"700",marginLeft:"18px"}}> 
           Better WiFi experience with  <br/>Maxis Home Fibre </h5>
           <p style={{marginLeft:"15px",fontFamily:"Maxis, sans-serif",fontSize:"14px",color:"#3e4a56",fontWeight:"300"}}> 
           Superfast home internet up to 800Mbps with Mesh WiFi for Whole home coverage.</p><br/>
           <p style={{ color:"rgb(64, 199, 6)",fontFamily:"Maxis, sans-serif",fontWeight:"800",marginLeft:"20px"}}> SIGN UP NOW </p>

           <div style={{color:"rgb(64, 199, 6)",fontSize: "30px",marginLeft:"180px",marginTop:"-55px"}}>
                <HiOutlineArrowNarrowRight />
                </div> 
            
            </CCard>
            
            </div>

            <div>
            <CCard style={{width:"22rem",marginLeft:"600px",height:"200px",marginTop:"-200px",borderRadius:"opx",cursor:"pointer",borderTop:"5px solid rgb(64, 199, 6)",borderLeft:"none",borderRight:"none",borderBottom:"none"}} ><br/>
           <h5 style={{color:"rgb(17, 94, 103)",fontFamily:"Maxis, sans-serif",fontWeight:"700",marginLeft:"18px"}}> 
            Better smartphone for RM1</h5>
           <p style={{marginLeft:"15px",fontFamily:"Maxis, sans-serif",fontSize:"14px",color:"#3e4a56",fontWeight:"300",marginTop:"25px"}}> 
          Add a Share Line to your Maxis Postpaid plan and get a better smartphone for  RM1 .</p><br/>
           <p style={{ color:"rgb(64, 199, 6)",fontFamily:"Maxis, sans-serif",fontWeight:"800",marginLeft:"20px"}}> FIND OUT MORE </p>

           <div style={{color:"rgb(64, 199, 6)",fontSize: "30px",marginLeft:"180px",marginTop:"-55px"}}>
                <HiOutlineArrowNarrowRight />
                </div> 
            
            </CCard>
            
            </div>

            <div>
            <CCard style={{width:"22rem",marginLeft:"1022px",height:"200px",marginTop:"-200px",borderRadius:"opx",cursor:"pointer",borderTop:"5px solid rgb(64, 199, 6)",borderLeft:"none",borderRight:"none",borderBottom:"none"}} ><br/>
           <h5 style={{color:"rgb(17, 94, 103)",fontFamily:"Maxis, sans-serif",fontWeight:"700",marginLeft:"18px"}}> 
            Help Your loved one upgrade to <br/>4G </h5>
           <p style={{marginLeft:"15px",fontFamily:"Maxis, sans-serif",fontSize:"14px",color:"#3e4a56",fontWeight:"300"}}> 
           Show your gratitude. Upgrade them before the 3G network ends.</p><br/>
           <p style={{ color:"rgb(64, 199, 6)",fontFamily:"Maxis, sans-serif",fontWeight:"800",marginLeft:"20px"}}> FIND OUT MORE </p>

           <div style={{color:"rgb(64, 199, 6)",fontSize: "30px",marginLeft:"180px",marginTop:"-55px"}}>
                <HiOutlineArrowNarrowRight />
                </div> 
            
            </CCard><br/><br/><br/><br/><br/><br/>
            </div>

            </div><br/><br/><br/>
                <div>
                    <h3 style={{fontFamily:"Maxis",fontWeight:"800",fontSize:"35px",textAlign:"center"}}> Malaysia's most advanced mobile and fibre network </h3>
                <br/>

                
                    <p style={{textAlign:"center",fontFamily:"Maxis, sans-serif",fontWeight:"400",fontSize:"24px"}}> 
                    It's what we do. <br/> Our trusted network covers 9 out of 10 Malaysians.<br/>Discover if that includes you.</p>
                <br/>
                    <button style={{marginLeft:"430px",backgroundColor:"rgb(64, 199, 6)",fontFamily:"Maxis, sans-serif",fontWeight:"600",color:"rgb(255, 255, 255)",height:"50px",borderRadius:"15px",fontSize:"14px",width:"350px"}}> 
                    CHECK OUR FIBRE COVERAGE  </button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button style={{marginLeft:"10px",backgroundColor:"rgb(64, 199, 6)",fontFamily:"Maxis, sans-serif",fontWeight:"600",color:"rgb(255, 255, 255)",height:"50px",borderRadius:"15px",fontSize:"14px",width:"350px"}}>  
                    CHECK OUR MOBILE COVERAGE </button><br/><br/>
                
                 </div>




         </div>
         </div>
    )
}

export default Plan;