import React,{useEffect} from 'react';
import "./TestimonialsSection.css";
import Aos from "aos";

const TestimonialCard = ({ name, content,logo}) => {
  useEffect(()=>{
    Aos.init({duration:1000});
  },[])
  return (
    <div className="testimonial-card" data-aos="zoom-in">
      <blockquote className="testimonial-content">{content}</blockquote>
      <div className="testimonial-author">
        <p className="author-name">{name}</p>
        <img src={logo} alt='logo of company' className='author-logo' height={80} width={120}/>
      </div>
    </div>
  );
};

export default TestimonialCard;
