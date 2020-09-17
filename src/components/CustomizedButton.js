import React, { Fragment, Component } from "react"
import Scroll from "./Scroll"

class HomeButton extends Component {
  render() {
    return (
      <Fragment>
        <Scroll
          type="id"
          element={
            this.props.btnName.includes("About Me") ? "about" : "projects"
          }
        >
          <div>
            <button
              className={`${
                this.props.btnName.includes("About Me") ? "about" : "projects"
              }-btn`}
            >
              <span>
                <a
                  href={
                    this.props.btnName.includes("About Me")
                      ? "#about"
                      : "#projects"
                  }
                >
                  {this.props.btnName}
                </a>
              </span>
            </button>
          </div>
        </Scroll>
      </Fragment>
    )
  }
}

class PortfolioButton extends Component {
  render() {
    return (
      <Fragment>
        <Scroll
          type="id"
          element={
            this.props.btnName.includes("About Me") ? "about" : "projects"
          }
        >
          <div id="resume-btn-container">
            <button className="resume">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">
                {" "}
                <a
                  href={
                    this.props.btnName.includes("About Me")
                      ? "#about"
                      : "#projects"
                  }
                  className="resume-btn"
                >
                  {this.props.btnName}
                </a>
              </span>
            </button>
          </div>
        </Scroll>
      </Fragment>
    )
  }
}

export { HomeButton, PortfolioButton }
