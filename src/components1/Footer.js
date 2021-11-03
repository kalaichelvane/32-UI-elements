import React from 'react'
import { AiFillApple } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { BsYoutube } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { ImLinkedin2 } from "react-icons/im";



function footer() {
    return (
        <div className="footer-info">
            
        <p style={{fontFamily:"Maxis, sans-serif",fontWeight:"600",color:"rgb(255, 255, 255)",fontSize:"14px",marginLeft:"180px"}}> Download Maxis App </p>

            <div>
                <AiFillApple className="apple"/>
            </div>

                <div>
                <FaGooglePlay className="gplay"/>
                </div><br/>




                <div>
                    <p style={{fontFamily:"Maxis, sans-serif",fontWeight:"600",color:"rgb(255, 255, 255)",fontSize:"14px",marginLeft:"180px"}}>Follow Us </p>
                </div><br/>


                <div>
                <FaFacebookF className="fb"/>
                </div>

                <div>
                    <GrInstagram className="insta"/>
                </div>

                <div>
                    <BsYoutube className="you"/>
                </div>

                <div>
                    <BsTwitter className="twit"/>
                </div>

                <div>
                    <ImLinkedin2 className="in"/>
                </div>


                <div className="ol">
                    <li>
                        <ol> Maxis</ol>
                        <ol> About Maxis</ol>
                        <ol> Investor Relations</ol>
                        <ol> Our Network</ol>
                        <ol> Corporate Responsibility</ol>
                        <ol> Newsroom</ol>
                        <ol> Careers</ol>
                    </li>
                </div>

                <div className="ol2">
                    <li>
                        <ol> Support</ol>
                        <ol> Contact Us</ol>
                        <ol> FAQ</ol>
                        <ol> Find A Store & Appointment </ol>
                        <ol> Delivery Tracker</ol>
                    </li>
                </div>

                <div className="ol3">
                    <li>
                        <ol>Terms & Policies</ol>
                        <ol> Terms & Conditions</ol>
                        <ol>Privacy Policy</ol>
                        <ol>Terms of Use</ol>
                        <ol>Phishing and Scam Protection</ol>
                        <ol>SKMM Notification</ol>
                    </li>
                </div><br/>

                <hr style={{marginTop:"50px",color:"white",width:"1200px",marginLeft:"180px",height:"2px"}}/>

                <div>
                    <p style={{fontFamily:"Maxis, sans-serif",color:"rgb(255, 255, 255)",fontSize:"11px",marginLeft:"180px"}}> price stated may be subject to service Tax</p>
                    <p style={{fontFamily:"Maxis, sans-serif",color:"rgb(255, 255, 255)",fontSize:"11px",marginLeft:"70rem",marginTop:"-32px"}}> copyright <span> &copy;</span> 2021 Maxis Bhd. All rights reserved. </p>
                </div>

                <div>
                    <p style={{fontFamily:"Maxis, sans-serif",color:"rgb(255, 255, 255)",fontSize:"11px",marginLeft:"180px"}}> Redress Your complaints at the Consumer Forum Malaysia (CFM) / WWW.complaint.cfm.org.my </p>
                </div>

        </div>
    )
}

export default footer
