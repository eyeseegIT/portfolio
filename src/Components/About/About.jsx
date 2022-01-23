import React from "react";
import "../../styles/About.css"

// Components and Assets
import Headshot from "../../assets/headshot.jpeg"

const About = () => {
  return (
    <>
    <h1>About Me</h1>
    <div className="about-container">
      <div className="about-child">
        <div><img src={Headshot} alt="Angela" id="headshot" width="500px"></img></div>
      </div>
      <div className="about-child">
        <div><h3>A software engineer, doctor, and business owner who is excited to improve how and what people see. Through knowledge and deductive-reasoning skills, arrive at diagnoses and sources of errors to execute treatments and fixes. Bringing a passion for learning and making a difference to each and every project. Approaching every problem with an open mind and willingness to embrace different opinions and methods all thanks to those from different walks of life (ie: patients, customers, staff, all alike). </h3></div>
      </div>

    </div>
    </>
  )
}

export default About;