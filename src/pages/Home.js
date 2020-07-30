import React, { Fragment } from "react"
import ConfettiAnimation from "../components/ConfettiAnimation"
import Title from "../components/Title"
import AboutButton from "../components/AboutButton"

import "../scss/Home.scss"

const Home = () => {
  return (
    <Fragment>
      <div className="skewed-bg">
        <ConfettiAnimation />
        <div className="title-container">
          <div className="title-center">
            <Title />
          </div>
          <div>
            <AboutButton />
          </div>
        </div>
      </div>
      <div className="skewed-bg-bottom"></div>
    </Fragment>
  )
}

export default Home
