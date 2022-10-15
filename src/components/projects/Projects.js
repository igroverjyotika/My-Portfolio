import React, { useState } from "react";
import "./projects.css";
import TextConvertor from "../../img/TextConvertor.png";
import MyHotMeals from "../../img/MyHotMeals.png";
import cdsms from "../../img/cdsms.png";

function Project() {
  // const [isHovering, setIsHovering] = useState(false);

  const onMouseEnterHandler = (e) => {
    const ele = document.getElementsByTagName(e.target);
    console.log(e.target.classList)
    // setIsHovering(true);
    // ele.style.border='red';
  };

  // const onMouseLeaveHandler=(e)=>{
  //   setIsHovering(false);
  // }
  // const onMouseEnterHandler = (e) => {
  //   // setIsHovering(true);
  //   const x = document.getElementById("card-1");
  //   // x.style.height = "64px";
  //   setIsHovering(true);
  //   if (isHovering == true) {
  //     x.backgroundColor = "grey";
  //     x.innerHTML =
  //       '<div className="card hidden">MyHotMeals is a website to give information about the services offered by the company</div>';
  //   }

  // };

  return (
    <div className="p">
      <div className="heading">PROJECTS</div>
      <div className="cards">
        <div
          className="card"
          id="card-1"
          
            // onMouseLeave={onMouseLeaveHandler}
        >
          <img src={MyHotMeals} alt="" onMouseOver={onMouseEnterHandler}/>
        </div>
        <div className="card" id="card-2">
          <img src={cdsms} alt="" />
        </div>
        <div className="card" id="card-3">
          <img src={TextConvertor} alt="" />
        </div>

        {/* <div className="card hidden">MyHotMeals is a website to give information about the services offered by the company</div>
        <div className="card hidden">TextConvertor is a website to give information about the services offered by the company</div>
        <div className="card hidden">cdsms is a website to give information about the services offered by the company</div> */}

        {/* {isHovering && (
        <div>
          I'll appear when you hover over the button.
        </div>
      )} */}

        {/* <div className="card" id="card-1"><img src={MyHotMeals} alt="" /></div>
        <div className="card" id="card-2"><img src={TextConvertor} alt="" /></div> */}
      </div>
    </div>
  );
}

export default Project;
