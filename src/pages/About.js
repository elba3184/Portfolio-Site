import React, { Fragment } from "react"
import profressional from "../../static/professional.png"
import HoneyCombImages from "../components/HoneyComb"
import CodeSnippet from "../components/CodeSnippet"
import "../scss/HoneyComb.scss"
import "../scss/About.scss"

const About = () => {
  return (
    <Fragment>
      <div className="about-me-container">
        <div className="about-me-title">ABOUT ME</div>
        <div className="about-me-content">
          <div className="honeycomb-cell professional">
            <img
              className="honeycomb-cell__image professional"
              src={profressional}
            />
            <div className="honeycomb-cell__title professional">
              Professional <small>Shot</small>
            </div>
          </div>
          <CodeSnippet />
        </div>
      </div>
        <HoneyCombImages />
      <div className="about-me-bottom"></div>
    </Fragment>
  )
}

export default About
