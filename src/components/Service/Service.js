import React, {useEffect} from 'react';
import './Service.css';
import Aos from "aos";


const Service = ({ title, description, icon }) => {
  useEffect(()=>{
    Aos.init({duration:1000});
  },[])
  return (
    <div className="service">
      <h3 className="service-title" data-aos="flip-right">{title}</h3>
      <p className="service-description" data-aos="zoom-in">{description}</p>
      {/* <img src="{props.path}"/> [to enter video or image of service] */ }
    </div>
  );
};

export default Service;
