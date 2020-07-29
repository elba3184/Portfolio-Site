import React, { Fragment } from "react"
import Skills from "../components/Skills"
import CodeSnippet from "../components/CodeSnippet"
import img1 from "../../static/professional.png"
import img2 from "../../static/photo-2.png"
import img3 from "../../static/photo-3.png"
import img4 from "../../static/photo-4.png"
import img5 from "../../static/photo-5.png"
import "../css/About.css"

const About = () => {
  return (
    <Fragment>
      <div className="about-me-container">
        <h1>ABOUT ME</h1>
        <div className="about-me-content">
          <img src={img1} className="professional-img"></img>
          <CodeSnippet />
          {/* <p>
        I'm a passionate Full-Stack Web Developer driven to make projects come
        to life. During my time at the University of Florida, I discovered an
        interest in robotics. I am a Full-Stack Web Developer with industry
        experience in Front-End Web Development looking to continue building my
        knowledge and skill set. I'm open to relocation or remote-work. I
        graduated from Ironhack’s Full-Stack Web Development Bootcamp in October
        2019 and from the University of Florida in December 2018. As my
        background speaks for itself, I have a strong passion for engineering,
        programming, and robotics. My interest in web development comes from a
        desire to blend my love for programming with my design background.
      </p>
      <p>
        I'm currently seeking new opportunities in the Big 🍎(New York City)!
        Please feel free to reach out and see I could be a match for you!
      </p> */}
        </div>
      </div>
      <div className="about-me-bottom"></div>

      <div>
        {" "}
        <img src={img2} style={{ width: "240px", height: "300px" }} />
        <img src={img3} style={{ width: "240px", height: "300px" }} />
        <img src={img4} style={{ width: "240px", height: "300px" }} />
        <img src={img5} style={{ width: "240px", height: "300px" }} />
        <Skills />
      </div>
    </Fragment>
  )
}

export default About
