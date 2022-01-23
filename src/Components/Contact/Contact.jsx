import React from "react";
import "../../styles/Contact.css"

// Components and Assets
import Email from "../../assets/email.png"
import Github from "../../assets/github.png"
import Linkedin from "../../assets/linkedin.png"

const Contact = () => {
  return (
    <>
    <h1>Let's Connect!</h1>
    <p>Feel free to reach out</p>
    <div>
      <div>
        <a target="_blank" rel="noopener noreferrer" href="mailto:angelayunquach@gmail.com"><img src={ Email } alt="email logo" className="card-img"></img></a>
      </div>
      <div>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/eyeseegIT"><img src={ Github } alt="github logo" className="card-img"></img></a>
      </div>
      <div>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/angelayunquach/"><img src={ Linkedin } alt="linkedin logo" className="card-img"></img></a>
      </div>
    </div>
    </>
  )
}

export default Contact;