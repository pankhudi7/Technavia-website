import companyLogo from "../../../src/resources/companyLogo.png";
import React, {  useEffect, useRef } from "react";
import {  NavLink, useLocation } from "react-router-dom";
const Header = ({ refs }) => {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/about":
        scrollSmoothHandler(refs.aboutUsRef);
        break;
      case "/product":
        scrollSmoothHandler(refs.productsRef);
        break;
      case "/applications":
        scrollSmoothHandler(refs.applicationsRef);
        break;
      case "/services":
        scrollSmoothHandler(refs.serviceSectionRef);
        break;
      case "/industry":
        scrollSmoothHandler(refs.industryRef);
        break;
      case "/news":
        scrollSmoothHandler(refs.newsRef);
        break;
      case "/carrer":
        scrollSmoothHandler(refs.careersPageRef);
        break;
      case "/contact":
        scrollSmoothHandler(refs.contactUsRef);
        break;

      default:
        scrollSmoothHandler(refs.homeRef);
        break;
    }
  }, [location, refs]);

  const scrollSmoothHandler = ref => {
    console.log("Triggered.");
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="d-flex justify-content-between headerStyle">
      <div className="">
        <img className="headerLogo" src={companyLogo} />
      </div>
      <input id="menu-toggle" type="checkbox" />
      <label class="menu-button-container" for="menu-toggle">
        <div class="menu-button"></div>
      </label>
      <ul className="menu navbar snip1217">
        <li>
          <NavLink to="/home" activeClassName="current">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about"  activeClassName="current">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/product"  activeClassName="current">Products</NavLink>
        </li>
        <li>
          <NavLink to="/applications"  activeClassName="current">Applications</NavLink>
        </li>
        <li>
          <NavLink to="/services"  activeClassName="current">Services</NavLink>
        </li>
        <li>
          <NavLink to="/industry"  activeClassName="current">Industry 4.0</NavLink>
        </li>
        <li>
          <NavLink to="/newscenter"  activeClassName="current">News Center</NavLink>
        </li>
        <li>
          <NavLink to="/carrer"  activeClassName="current">Career</NavLink>
        </li>
        <li>
          <NavLink to="/contact"  activeClassName="current">Contact Us</NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Header;
