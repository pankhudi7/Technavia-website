import React, { useState } from 'react';
import '../Application/ApplicationCard.css';
import { useEffect } from 'react';
import Aos from 'aos';

const ApplicationCard = (props) => {
  const [isFlipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };

  useEffect(()=>{
    Aos.init({duration:1500});
  },[])
  return (
    <div className={`app-card ${isFlipped ? 'flipped' : ''}`}  onClick={handleFlip} >
    {/* <div className='heading'>
        <h1>{props.heading}</h1>
        </div> */}
      <div className="app-card-inner">
        <div className="app-card-front" data-aos="zoom-in">
          <img src={props.frontImage} alt="Front" className='card-image'/>
        </div>
        <div className="app-card-back" >
          <p>{props.backContent}</p>
        </div>
      </div>
    </div>
  );
};

export default ApplicationCard;