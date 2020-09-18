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

export default HomeButton
