import Firstdiv from "../Home";
import Seconddiv from "../AboutUs";
import ThirdDiv from "../Products";
import NewDiv from "../ApplicationContent/Apps"
import FourthDiv from "../TeamMembers";
import Fifthdiv from "../ServiceSection";
import Newsdiv from "../News";
import Sixthdiv from "../Careers";
import Eighthdiv from "../Testimonials/TestimonialsSection"
import Sevendiv from "../ContactUs";
import Gallerydiv from "../Gallery/Gallery"
import Finaldiv from "../Footer/Footer";


const mainContainer = ({ refs }) => {
  return (
    <>
      <div>
        <Firstdiv ref={refs}/>
        <Seconddiv ref={refs.aboutUsRef}/>
        <ThirdDiv ref={refs.productsRef}/>
        <FourthDiv ref={refs.teamMembersRef}/>
        <NewDiv ref={refs.applicationsRef}/>
        <Gallerydiv ref={refs.galleryRef}/> 
        <Fifthdiv ref={refs.serviceSectionRef}/>
        <Newsdiv ref ={refs.newsRef}/>
        <Sixthdiv ref={refs.careersPageRef}/>
        <Eighthdiv ref={refs.testimonialsSectionRef}/>
        <Sevendiv ref={refs.contactusRef}/>
        <Finaldiv ref = {refs.footerRef}/>
      </div>
    </>
  );
};
export default mainContainer;


