import React from 'react'
import {CAvatar  } from '@coreui/react';
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.png";


function Avatar() {
    return (
        <div>
           <CAvatar src={image5}/>
           <CAvatar src={image6}/>
           <CAvatar src={image7}/>

        </div>
    )
}

export default Avatar
