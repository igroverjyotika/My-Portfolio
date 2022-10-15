import React from "react";
import "./education.css";
import cartoongirl from "../../img/cartoongirl.png";
import vtulogo from "../../img/vtulogo.png";
import cbselogo from "../../img/cbselogo.png";

function education() {
  return (
    <div className="e">
      <h1 className="e-mainheading">Education</h1>

      <div className="e-contents">
        <div className="e-left">
          <div className="e-left-contents">
            <div className="e-left-left">
              <div className="e-left-content">
                <h2 className="e-inside e-inside-1">BACHELOR OF ENGINEERING</h2>
                <div className="e-inside e-inside-2">2019-2023</div>
                <div className="e-inside e-inside-3">In Computer Science</div>
                <div className="e-inside e-inside-4" >
                  From Global Academy of Technology
                </div>
              </div>
              <div className="e-left-content">
                <h2 className="e-inside e-inside-1">Senior Secondary</h2>
                <div className="e-inside e-inside-2">2017-2019</div>
                <div className="e-inside e-inside-3">Decent Public School</div>
                <div className="e-inside e-inside-4">From Delhi</div>
              </div>
            </div>
            <div className="logos">
              <img src={vtulogo} alt="" id="logo-1" />
              <img src={cbselogo} alt="" id="logo-2" />
            </div>
          </div>
        </div>

        <div className="e-right">
          <div className="">
            <img src={cartoongirl} alt="" className="cartoongirl" />
          </div>
        </div>
      </div>

      {/* <div className="e-contents">
        <div className="e-1 e-inside">
          <h2 className="e-1-content e-inside-content">
            BACHELOR OF ENGINEERING
          </h2>
          <div className="e-1-content e-inside-content">2019-2023</div>
          <div className="e-1-content e-inside-content">
            In Computer Science
          </div>
          <div className="e-1-content e-inside-content">
            From Global Academy of Technology
          </div>
        </div>
        <div className="e-2 e-inside">
          <h2 className="e-2-content e-inside-content">Senior Secondary</h2>
          <div className="e-2-content e-inside-content">2017-2019</div>
          <div className="e-2-content e-inside-content">From Delhi</div>
        </div>
        <div className="photo">
          <img src={cartoongirl} alt="" className="cartoongirl" />
        </div>
      </div> */}
    </div>
  );
}

export default education;
