import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile .png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Namal Ekanayaka,</span> frontend developer based in SRI-LANKA
      </h1>
      <p>
        I am a frontend developer from sri lanka, with 2 years of experience in
        web-development
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          {" "}
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
