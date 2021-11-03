import React from "react";
import ReactPlayer from "react-player";
import { Player } from "video-react";

function Videos() {
  return (
      <div className="video1">
    < ReactPlayer />
    <video loop autoplay playsinline controls>
      <source src="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/Reveal_Video_Adidas_x_DP_FINAL_4k-1920bby1080_madh4h.mp4" 
         playing/>
    </video>
     </div>
    
  );
}
export default Videos;
