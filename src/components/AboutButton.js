import React, { Fragment, Component } from "react"
import Scroll from "../components/Scroll"

class AboutButton extends Component {
  render() {
    return (
      <Fragment>
        <Scroll type="id" element="about">
          <div id="about-btn-container">
            <button class="about-me">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">
                {" "}
                <a href="#about" className="about-btn">
                  About Me
                </a>
              </span>
            </button>
          </div>
        </Scroll>
      </Fragment>
    )
  }
}

export default AboutButton
