import React,{useEffect} from 'react';
import './ContactUs.css';
import Aos from 'aos';

const ContactUs = () => {
  useEffect(()=>{
    Aos.init({duration:1000});
  },[])
  return (
    <div className="contact-us-container" data-aos="zoom-in">
      <h2>Contact Us</h2>
      <p>If you have any inquiries or need further information, please feel free to reach out to us!</p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Your Inquiry:</label>
          <textarea id="message" name="message" rows="6" required></textarea>
        </div>
        <button type="submit">Submit Inquiry</button>
      </form>
    </div>
  );
};

export default ContactUs;
