import React from "react";
import image from "./Images/Foodify.jpg";
import image2 from "./Images/Media.png";
import image3 from "./Images/qrcode.jpg";
import image4 from "./Images/Microsoft.png";
import image5 from "./Images/resume.jpg";

import "./App.css";
import Navbar from "./navbar";

const data = [
  {
    image: image,
    URLType:
      "https://64b547a4529e9900086d34d8--frolicking-pothos-0c5f40.netlify.app/",
    Title: "Foodify",
  },
  {
    image: image2,
    URLType: "https://github.com/Sri-vardhan18/Mediaplayer2",
    Title: "MediaPlayer",
  },
  {
    image: image3,
    URLType: "https://magnificent-taffy-28e97e.netlify.app/",
    Title: "QR About Me",
  },
  {
    image: image4,
    URLType: "https://zesty-parfait-406e9e.netlify.app/",
    Title: "Cell-Image",
  },
];

const resumeDriveLink =
  "https://drive.google.com/uc?id=1dx1ITtLmyAofgk_QxrrySccYIMmNgTMZ";

const downloadResume = () => {
  const link = document.createElement("a");
  link.href = resumeDriveLink;
  link.target = "_blank"; // Open the link in a new tab/window
  link.rel = "noopener noreferrer";
  link.click();
};

const openWindow = (url) => {
  window.open(url, "_blank");
};

const Projects = () => {
  return (
    <>
      <Navbar/>
      <div className="container">
        {data.map((item, index) => (
          <div key={index} className="card">
            <div style={{ backgroundColor: "white" }}>
              <img src={item.image} alt={`Project ${index + 1}`} />
            </div>
            <div className="belowsize">
              <h5>{item.Title}</h5>
              <button
                onClick={() => openWindow(item.URLType)}
                className="demo-button"
              >
                Demo
              </button>
            </div>
          </div>
        ))}
        <div className="card">
          <img src={image5} alt="Resume" />
          <h5>Resume</h5>
          <button onClick={downloadResume} className="demo-button">
            Download
          </button>
        </div>
      </div>
    </>
  );
};

export default Projects;
