import React,{useEffect} from 'react';
import careers from '../../resources/careers.jpg';
import Aos from 'aos';

  const CareersPage = () => {
    useEffect(()=>{
      Aos.init({duration:1000});
    },[])
  return (
    <div style={{ display:'inline-block', padding:'20px', justifyContent:'space-around', width:'100%', fontFamily: 'sans-serif',fontSize: '30px', color:'#12486B'}}>
      <img src={careers} alt="Careers" class="main-div" data-aos="zoom-in" style={{width: '100%', height: '100%',  backgroundsize: 'cover', backgroundposition: 'center', backgroundrepeat: 'no-repeat', objectfit: 'cover'}} />
      <div data-aos="zoom-in">
      <h1>Careers</h1>
      <p style={{color:'black'}}>Join our team and be part of something great!</p>
      <div style={{ display: 'inline-block',  width: '100%', justifyContent: 'space-around', marginTop: '20px', padding:'20px', height:'100%' }}>
      <h3 style={{textDecoration: 'underline', textDecorationColor:'#DD4A48'}} href="">hr@technaviaindia.com</h3>
      </div>
      </div>
    </div>
  );
};

export default CareersPage;






