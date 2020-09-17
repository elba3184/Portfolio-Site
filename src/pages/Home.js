import React, { Fragment } from "react"
import Title from "../components/Title"
import { ContactIcons } from "../pages/Contact"
import { HomeButton } from "../components/CustomizedButton"
import "../scss/Home.scss"

const Home = () => {
  return (
    <Fragment>
      <div className="home-bg">
        {/* <div className="dot-wrapper">
          <div className="dot"></div>
        </div> */}
        <div className="title-ellipse"></div>
        <div className="title-container">
          <div className="title-left">
            <Title />
          </div>
        </div>
        <div className="contact-left">
          <div className="find-me">Find me on</div>
          <ContactIcons />
          <div className="portfolio-btn-container">
            <HomeButton btnName={"About Me"} />
            <span className="projects-btn-wrapper">
              <HomeButton btnName={"Projects"} />
            </span>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Home
