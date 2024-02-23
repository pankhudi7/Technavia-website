import React, { forwardRef } from 'react';
import './Apps.css';
import ApplicationCard from "../Application/ApplicationCard"
import imageone from "../../resources/imageone.jpg"
import imagetwo from "../../resources/painting_applicator.png"
import imagethree from "../../resources/dozing.jpg" 
import imagefour from "../../resources/colour changing system.jpeg"
import imagefive from "../../resources/Paint-circulation-system.jpg"
import imagesix from "../../resources/pigging-system.jpg"
import imageseven from "../../resources/Electrical-Pneumatic-control-system-1-1.jpg"
import imageeigth from "../../resources/sealing-dispensing-application.jpg"

const Apps = forwardRef((props,ref) => { 
    return (
      <section ref={ref} class="parallax-1">
        <div className="application-container">
          <div className="card-spacing" >
          <ApplicationCard  frontImage={imageone} backContent="Technavia excels in robotic painting, delivering exceptional quality and high productivity with minimal rejection. 
          Having installed over 300 painting robots across diverse manufacturing sectors, we revolutionize painting processes. 
          Offering reciprocator systems, they cater to various atomizers and disc applicators, 
          optimizing solutions for low-budget projects." />
          </div>
          <div className="card-spacing" >
          <ApplicationCard frontImage={imagetwo} backContent="Applicator selection plays a key role in achieving the desired result by following the set conditions. 
          Technavia has used every form of applicator considering the requirement on particular component. Starting from the conventional gun, air resisted gun, 
          electrostatic gun, and electrostatic dual gun and Bell applicator." />
          </div>
          <div className="card-spacing" >
          <ApplicationCard frontImage={imagethree} backContent="We deliver dozing equipment like FCV (flow control valve), FGP (Flushable Gear Pump) and flow meter base system
           for 1K and 2K colours. The dozing equipment are characterised by the level of precision required in the quantity of the paint sprayed by the applicator." />
          </div>
          <div className="card-spacing" >
          <ApplicationCard frontImage={imagefour} backContent="In the condition of more than one number of colour we equip our system with Colour changing valve, which expedite 
          the colour changing process and diminish the wastage of solvent while cleaning the line." />
          </div>
          <div className="card-spacing" >
          <ApplicationCard frontImage={imagefive} backContent="We integrate painting applicators and robots with precision paint circulation systems, drawing on technology and
           experience from robotic projects. Specializing in 1K, 2K, and 3K components, they ensure accurate mixing for consistent performance." />
          </div>
          <div className="card-spacing" >
          <ApplicationCard frontImage={imagesix} backContent="We provide full-fledged solution with pigging system. The use of pig systems in painting facilities optimises 
          economy – via short paint changing times and recovery of material. The pigging system returns valuable paint and hardener to the supply units in optimal purity and
          remove the excess pipe content from the piping systems with minimal loss, quickly and without residue." />
          </div>
          <div className="card-spacing" >
          <ApplicationCard frontImage={imageseven} backContent="Technavia has in house facility for making electrical control panel, equipping with the desired PLC as per the customer requirement. 
          We build customized pneumatic control panel for automatic painting system fulfilling the requirement of the painting line. We follow international standard by equipping the panel with 
          reputed make items." />
          </div>
          <div className="card-spacing" >
          <ApplicationCard frontImage={imageeigth} backContent={<ul>
            <li>PVC Seam Sealing: Sealing job to fill the gap with PVC paint</li>
            <li>LASD to seal and soundproof vehicle underbody, reducing driving noise.</li>
            <li>UBS: Apply synthetic rubber sealer by robot to seal steel gaps.</li>
            <li>UBC: Apply dark grey PVC resin coating to automobile underbody floor.</li>
            <li>RPP: Seal underbody with urethane paint to protect from stone-induced cracks.</li>
          </ul>} />
          </div>
          </div>
          </section>
          );
          });
  
  export default Apps;