import React, { Fragment } from "react"
import Home from "../pages/Home"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import About from "../pages/About"
import Projects from "../pages/Projects"
import Contact from "../pages/Contact"
import "../css/Home.css"

const IndexPage = () => (
  <Fragment>
    <Navbar />
    <section id="home" className="home-section text-center">
      <Home />
    </section>
    <section id="about" className="about-section">
      <About />
    </section>
    {/* <section id="projects" className="about-section text-center">
      <Projects />
    </section>
    <section id="contact" className="contact-section text-center">
      <Contact />
    </section> */}
    {/* <Footer /> */}
  </Fragment>
)

export default IndexPage
