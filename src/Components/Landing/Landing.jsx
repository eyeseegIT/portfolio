import React from "react";

// Components & Assets
import programmer from "../../assets/animation/programmer.json"
import Animation from "../Misc/Animation";

const Landing = () => {
  return (
    <div className="landing">
      <div className="left-container">
        <h1 id="splash-logo">Hello, I'm Angela</h1>
      </div>
      <div className="right-container">
        <Animation animData={programmer} />
      </div>
    </div>
  )
}

export default Landing;