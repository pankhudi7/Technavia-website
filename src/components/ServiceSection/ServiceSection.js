import React from 'react';
import 'aos/dist/aos.css';
import Service from '../Service/Service';
import './ServiceSection.css';

const ServiceSection = () => {
  return (
    <section className="service-section">
      <div className="service-container" data-aos="zoom-in">
        <Service
          title="Best service practice"
          description="During breakdown at site, we not only analyse the cause and establish improvement plans but also disclose problems to the customer and apply to the sites and monitor them in most efficient manner. We follow a common practise for sharing problems at periodic check, examining thoroughly through non-operational inspection, and scheduling plans for preventive maintenance of equipment as per the need of the equipment.
          While maintaining preventive measures, we practice predictive maintenance through continuous management of equipment history. Moreover, we also prepare manuals for failures and apply monitoring system comprehensively."
        />
        <Service
          title="Spare part Inventory"
          description="We have an impressive spare inventory for the equipment provided in order to deliver an efficient service backup to our customer. Our inventory planning is on the basis of making available the most critical parts and high lead time items.
          On timely basis our team keep on inspecting the condition of the parts in the system provided and also suggest for changing or repairing them for smooth operation of the machine and thus enhancing the life of the equipment."
        />
        <Service
          title="System Up gradation"
          description="We not only provide the system for a green field project but are also highly capable of upgrading the current process of application by moulding it in a new face of revamped solution. Our team study the limitation of the existing system and considering the client’s desire we work on providing the best solution with varying options and let our client choose the best option covering technical and commercial aspects.
          Refurbishing an existing system has many challenges but with our expert engineering team we explore every possible aspect in upgrading the system to a new level and make it in line to cope with the new technology."
        />
        <Service
          title="Robot teaching"
          description="Technavia has a dedicated team for robot teaching on new models. In the teaching process initially we do offline teaching for viewing the accessibility of the robot, then after we consider the best suited trajectory fulfilling the required quality and tack time.
          We have done numbers of projects worldwide for new model teaching on different make robots."
        />
        <Service
          title="Design Engineering"
          description="We do detail study on building new concepts for painting and handling application. Our capability includes simulation study as well as offline programming on different make robots. We do thorough study on the activity which includes the cycle time study and robot model selection for an application. 
          Our design engineering team is also capable in designing the customised system required for a particular application. By developing new products this team contributes its small share in MAKE IN INDIA campaign."
        />
        <Service
          title="Training"
          description="We provide professional training on the robots and application in order to develop the knowhow of our customer on the equipment supplied by us.
          In basic category of our training we mainly focus on the safe operation of the system by the operator. This also makes the operator capable of handling the system on its own and he can address the errors to us at the time of breakdown.
          In advance training we provide the training mainly on the intrinsic parts of the machines supplied by us. This training includes the advance knowledge of other optional functions of the robot and the criticality in the preventive maintenance of the system.  
          Technavia has training robots along with the peripheral painting equipment in their premises"
        />
      </div>
    </section>
  );
};

export default ServiceSection;