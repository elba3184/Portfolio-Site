import React, { Fragment } from "react"
import { Helmet } from "react-helmet"
import Home from "../pages/Home"
import Navbar from "../components/Navbar"
import About from "../pages/About"
import Skills from "../components/Skills"
import Projects from "../pages/Projects"
import Contact from "../pages/Contact"
import Footer from "../components/Footer"
import "../scss/Home.scss"

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
      <body>
        {`<div id="___gatsby"></div>
          <script src="/commons.js"></script>
          <script src="dark-mode-switch.min.js"></script>
          <script
            src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
            integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
            crossorigin="anonymous"
          ></script>
          <script
            src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
            integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
            crossorigin="anonymous"
          ></script>
          <script
            src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
            integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
            crossorigin="anonymous"
          ></script>
          `}
      </body>
    </Helmet>
    <Navbar />
    <section id="home" className="home-section text-center">
      <Home />
    </section>
    <section id="about" className="about-section">
      <About />
    </section>
    <section id="skills" className="skills-section">
      <Skills />
    </section>
    <section id="projects" className="projects-section">
      <Projects />
    </section>
    <div className="contact-container">
      <section id="contact" className="contact-section text-center">
        <Contact />
      </section>
      <div className="footer-container">
        <Footer />
      </div>
      {/* <div className="sticky-button">TOP</div> */}
    </div>
  </Fragment>
)

export default IndexPage
