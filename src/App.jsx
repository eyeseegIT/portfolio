import React from "react";
import { Route, Routes } from 'react-router-dom'

// Components
import Nav from "./Components/Nav/Nav"
import Landing from "./Components/Landing/Landing"
import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Projects from "./Components/Projects/Projects"

const App = () => {
  return (
    <>
    <main>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
      </Routes>
    </main>
    </>
  )
}

export default App;
