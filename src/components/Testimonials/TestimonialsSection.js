import React,{useEffect} from 'react';
import TestimonialCard from "../Testimonials/TestimonialCard"; 
import './TestimonialsSection.css';
import Aos from "aos";
import hero from "../../resources/HeroLogo.png";
import bajaj from "../../resources/Bajajlogo.jpg";
import plustech from "../../resources/PlustechLogo.jpeg";

const TestimonialsSection = () => {
  useEffect(()=>{
    Aos.init({duration:1000});
  },[])
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="section-title" data-aos="zoom-in">Client Testimonials</h2>
        <div className="testimonials-grid">
          <TestimonialCard
            name="Hero Motocorp"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut"
            logo = {hero}
          />
          <TestimonialCard
          name="Bajaj Auto"
          content="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut"
          logo={bajaj} 
          />          
          <TestimonialCard
          name="Plustech Systems & Solutions Pvt Ltd"
          content="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut"
          logo={plustech} 
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;