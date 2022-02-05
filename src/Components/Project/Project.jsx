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
            <a target="_blank" rel="noopener noreferrer" href="https://foodie-baby.herokuapp.com/"><img src={ FoodieBaby } alt="foodie baby" className="card-img"></img>
            <div className="card-description">
              <h2>Foodie Baby</h2>
              <p>Full stack application built using MEN stack where parents can provide and be provided with meal ideas for their baby.</p>
            </div>
            </a>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-content">
          <div className="card-img-container">
            <a target="_blank" rel="noopener noreferrer" href="https://eyeseedocs.herokuapp.com/"><img src={ EyeDocs } alt="eye see docs" className="card-img"></img>
            <div className="card-description">
              <h2>Eye See Docs</h2>
              <p>Application built using Django and Python to help eye doctors view and store encountered optometric cases.</p>
            </div>
            </a>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-content">
          <div className="card-img-container">
            <a target="_blank" rel="noopener noreferrer" href="https://the-number-slots.netlify.app/"><img src={ Slot } alt="slot machine" className="card-img"></img>
            <div className="card-description">
              <h2>The Numbers Slot</h2>
              <p>Classic Vegas-style game built using Javascript, HTML, CSS.</p>
            </div>
            </a>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-content">
          <div className="card-img-container">
            <a target="_blank" rel="noopener noreferrer" href="https://make-your-marvel.herokuapp.com/"><img src={ Marvel } alt="make your marvel" className="card-img"></img>
            <div className="card-description">
              <h2>Make Your Marvel</h2>
              <p>Full stack application that allows users to add their favorite Marvel characters and imagine what a comic scene between them would be like. Built using MERN stack and Marvel API.</p>
            </div>
            </a>
          </div>
        </div>
      </div>

    </section>
    </>
  )
}

export default Project;