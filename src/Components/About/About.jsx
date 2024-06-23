import React from "react";
import "./About.css";
import profile_img from "../../assets/profile .png";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src="" alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Iam an expirienced Frontend Developer with over 2 years in the
              field.Throughout my career, i have had the privileage of
              collaborating with prestigious organizations,
            </p>
            <p>
              My passion for frontend development is not only but also in the
              enthusiam and dedication I bring to each project.
            </p>
          </div>
          <div className="about-skils">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} /> <p>75%</p>
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "40%" }} /> <p>40%</p>
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
              <p>60%</p>
            </div>
            <div className="about-skill">
              <p>BoostTrap</p>
              <hr style={{ width: "50%" }} /> <p>50%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-achivements">
        <div className="about-achivment">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achivment">
          <h1>12+</h1>
          <p>PROJECT COMPLITETED</p>
        </div>
        <hr />
        <div className="about-achivment">
          <h1>6+</h1>
          <p>HAPPY COUSTOMERS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
