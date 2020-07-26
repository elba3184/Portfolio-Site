import React, { Fragment } from "react"
import Home from "./Home"
import About from "./About"
import Navbar from "../components/Navbar"
import Contact from "./Contact"
import Projects from "./Projects"

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </Fragment>
  )
}

export default App
