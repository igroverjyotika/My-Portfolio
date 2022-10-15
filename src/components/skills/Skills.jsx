import "./skills.css";
import React from "react";
import htmllogo from "../../img/html-5.png";
import css from "../../img/css-3.png";
import python from "../../img/python.png";
import javascript from "../../img/java-script.png";

function skills() {

  // function onMouseEnterHandler(e){
  //   console.log(e.target);
  //   const elem = document.getElementsByTagName(e.target)
  //   elem.innerHTML='';
  // }

  return (
    <div className="s">
      <div className="s-cards">
        <div className="s-card card-1">Python</div>
        <div className="s-card card-2">HTML</div>
        <div className="s-card card-3">CSS</div>
        <div className="s-card card-4">JavaScript</div>
      </div>

      <div className="s-heading">Skills</div>

      <div className="s-transition">
        <div className="s-logo img1" >
          <img src={htmllogo} alt="" />
        </div>
        <div className="s-logo img2">
          <img src={python} alt="" />
        </div>
        <div className="s-logo img3">
          <img src={css} alt="" />
        </div>
        <div className="s-logo img4">
          <img src={javascript} alt="" />
        </div>
      </div>
    </div>
  );
}

export default skills;
