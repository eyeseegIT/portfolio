import React from "react";
import "../../styles/Project.css"

// Components and Assets
import EyeDocs from "../../assets/eye-see-docs.png"
import FoodieBaby from "../../assets/foodie-baby.png"
import Slot from "../../assets/numbers-slot.png"
import Marvel from "../../assets/make-your-marvel.png"

const Project = () => {
  return (
    <>
    <h1>Projects</h1>
    <section className="card-container">

      <div className="card">
        <div className="card-content">
          <div className="card-img-container">
            <a target="_blank" rel="noopener noreferrer" href="https://foodie-baby.herokuapp.com/"><img src={ FoodieBaby } alt="foodie baby" className="card-img"></img></a>
            <h2 className="card-description">Foodie Baby</h2>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-content">
          <div className="card-img-container">
            <a target="_blank" rel="noopener noreferrer" href="https://eyeseedocs.herokuapp.com/"><img src={ EyeDocs } alt="eye see docs" className="card-img"></img></a>
            <h2 className="card-description">Eye See Docs</h2>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-content">
          <div className="card-img-container">
            <a target="_blank" rel="noopener noreferrer" href="https://the-number-slots.netlify.app/"><img src={ Slot } alt="slot machine" className="card-img"></img></a>
            <h2 className="card-description">The Numbers Slot</h2>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-content">
          <div className="card-img-container">
            <a target="_blank" rel="noopener noreferrer" href="https://make-your-marvel.herokuapp.com/"><img src={ Marvel } alt="make your marvel" className="card-img"></img></a>
            <h2 className="card-description">Make Your Marvel</h2>
          </div>
        </div>
      </div>

    </section>
    </>
  )
}

export default Project;