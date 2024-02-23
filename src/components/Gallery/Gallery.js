import React from 'react';
import './Gallery.css';
import applicationone from "../../resources/vlcsnap-2022-07-26-19h00m19s914.png"
import applicationtwo from "../../resources/application1.png"
import applicationthree from "../../resources/application2.png"
import applicationfour from "../../resources/vlcsnap-2022-10-27-16h32m48s333.png"

const Gallery = () => {
  return (
    <div className="gallery-container" >
      <div className="image-gallery">
        <img src={applicationone} alt="machine 1" />
        <img src={applicationtwo} alt="machine 2" />
        <img src={applicationthree} alt="machine 3" />
        <img src={applicationfour} alt='machine 4' />
        {/* <img src={applicationfive} alt='machine 4' />
        <img src={applicationsix} alt='machine 4' /> */}
      </div>
    </div>
  );
};

export default Gallery;
