import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import './flippingCard.css';
const FlippingCard = (props) => {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
  return (
    <div class="card" data-aos="zoom-in">
      <div class="content">
        <div class="heading">{props.heading}</div>
        <div class="front">{props.frontText}</div>
        <div class="back">{props.backText}</div>
        <img src={props.path} alt="machine" data-aos="flip-right" />
      </div>
    </div>
  );
};
export default FlippingCard;



