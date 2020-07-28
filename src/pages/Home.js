import React, { Fragment } from "react"
import ConfettiAnimation from "../components/ConfettiAnimation"
import Title from "../components/Title"
import AboutButton from "../components/AboutButton"

import "../css/Home.css"

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
      <div className="skewed-bg-bottom">something</div>
    </Fragment>
  )
}

export default Home
