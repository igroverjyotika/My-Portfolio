import "./intro.css";
import React, { useState } from "react";
// import DocViewer from "react-doc-viewer";
import Me from "../../img/me.png";
import resume from "../../img/resume.png";
// import Me from "../../img/me.p";
// import {Document} from 'react-pdf';

// Import the main component
import { Viewer } from "@react-pdf-viewer/core"; // install this library
// Plugins
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout"; // install this library
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
// Worker
import { Worker } from "@react-pdf-viewer/core"; // install this library

const Intro = () => {
  const [seen,isSeen] = useState();
  // const defaultLayoutPluginInstance = defaultLayoutPlugin();

  // const docs = [
  //   // { uri: "https://url-to-my-pdf.pdf" },
  //   { uri: require("../../img/jyotika_grover_resume_.pdf") }, // Local File
  // ];

  const onClickResumeHandler = () => {
    isSeen(resume);
  };

  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello World! I'm</h2>
          <h1 className="i-name">Jyotika Grover</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Student</div>
              {/* <div className="i-title-item">Intern</div>  */}
              <div className="i-title-item">Learner</div>
            </div>
          </div>
          <p className="i-desc">
            A computer science student passionate about programming and design.
          </p>
        </div>
        <button className="btn-resume"><a href="https://drive.google.com/file/d/1xLaJx5U3LpzAKOC9rI1jiGwbWv9CA5zy/view?usp=sharing" target="_blank" >Resume</a></button>

        {/* <div
          className="btn btn-resume hidden"
          onClick={onClickResumeHandler}
        >
          Resume
          {defaultPdfFile && (
            <>
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                <Viewer
                  fileUrl={defaultPdfFile}
                  plugins={[defaultLayoutPluginInstance]}
                />
              </Worker>
            </>
          )}
        </div> */}
        
        <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke="black"
          className="i-scroll"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="scroll">
            <path
              id="Vector"
              d="M40.5 15L34.5 9L28.5 15"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M28.5 24L34.5 30L40.5 24"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group">
              <path
                id="Vector_3"
                d="M9 37.5H60"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <path
              id="Vector_4"
              d="M34.5 27V9"
              stroke-width="2.9895"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group_2">
              <path
                id="Vector_5"
                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
        </svg>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
