import React, { Fragment } from "react"
import { Helmet } from "react-helmet"
import Home from "../pages/Home"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import About from "../pages/About"
import Skills from "../components/Skills"
import Projects from "../pages/Projects"
import Contact from "../pages/Contact"
import "../css/Home.css"

const IndexPage = () => (
  <Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Elba Chimilio 👩🏽‍💻 Full-Stack Developer</title>
      <meta http-equiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="note" content="environment=development" />
      <script src="/socket.io/socket.io.js"></script>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/konpa/devicon@master/devicon.min.css"
      />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossorigin="anonymous"
      />
    </Helmet>
    <Navbar />
    <section id="home" className="home-section text-center">
      <Home />
    </section>
    <section id="about" className="about-section">
      <About />
    </section>
    {/* <section id="skills" className="skills-section">
      <Skills />
    </section> */}
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
