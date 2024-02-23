import "./App.css";
import AppHeader from "./components/AppHeader";
import MainContainer from "./components/MainContainer";
import React, { useRef } from "react";
import { HashRouter } from "react-router-dom";
// import Numberdiv from "./components/numberAnimation";
// import TeamMembers from "./components/TeamMembers";
// import Testimonials from "./components/Testimonials";

function App() {
  const homeRef = useRef(null);
  const aboutUsRef = useRef(null);
  const productsRef = useRef(null);
  const applicationRef = useRef(null);
  const teamMemberRef = useRef(null);
  const industryRef = useRef(null);
  const newsCenterRef = useRef(null);
  const carrerRef = useRef(null);
  const contactUsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const careersPageRef = useRef(null);
  const newsRef = useRef(null);
  const serviceSectionRef = useRef(null);
  const testimonialsSectionRef = useRef(null);
  const applicationsRef = useRef(null);
  const galleryRef = useRef(null);
  const footerRef = useRef(null);
  const backgroundRef = useRef(null);
  return (
    <div ref={homeRef} className="App">
      <HashRouter>
        <AppHeader
          refs={{
            aboutUsRef,
            productsRef,
            applicationRef,
            industryRef,
            newsCenterRef,
            carrerRef,
            contactUsRef,
            homeRef,
            teamMemberRef,
            testimonialsRef,
            careersPageRef,
            newsRef,
            serviceSectionRef,
            testimonialsSectionRef,
            applicationsRef,
            galleryRef,
            backgroundRef,
            footerRef
          }}
        />
        <MainContainer refs={{
            aboutUsRef,
            productsRef,
            applicationRef,
            industryRef,
            newsCenterRef,
            carrerRef,
            contactUsRef,
            homeRef,
            teamMemberRef,
            testimonialsRef,
            careersPageRef,
            newsRef,
            serviceSectionRef,
            testimonialsSectionRef,
            applicationsRef,
            galleryRef,
            backgroundRef,
            footerRef
          }} />
        {/* <Numberdiv/> */}
      </HashRouter>
    </div>
  );
}

export default App;
