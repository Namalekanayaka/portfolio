import React from "react";
import "./Work.css";
import mywork_1 from "../../assets/work-1.png";
import mywork_2 from "../../assets/work-2.png";
import mywork_3 from "../../assets/work-3.png";
import mywork_7 from "../../assets/work-7.png";
import mywork_5 from "../../assets/work-5.png";
import mywork_6 from "../../assets/work-6.png";

const Work = () => {
  return (
    <div id="work" className="new-work">
      <div className="work-title">
        <h1>My Latest Projects</h1>
      </div>
      <div className="wrapper-1">
        <div className="row-1">
          <div className="card-1">
            <img src={mywork_1} alt="" />
          </div>
        </div>
        <div className="row-1">
          <div className="card-1">
            <img src={mywork_2} alt="" />
          </div>
        </div>
        <div className="row-1">
          <div className="card-1">
            <img src={mywork_3} alt="" />
          </div>
        </div>
        <div className="row-1">
          <div className="card-1">
            <img src={mywork_7} alt="" />
          </div>
        </div>
        <div className="row-1">
          <div className="card-1">
            <img src={mywork_5} alt="" />
          </div>
        </div>
        <div className="row-1">
          <div className="card-1">
            <img src={mywork_6} alt="" />
          </div>
        </div>
      </div>
      <div className="work-connect">
        <p>Show more</p>
      </div>
    </div>
  );
};

export default Work;
