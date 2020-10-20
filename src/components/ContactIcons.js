import React, { Fragment, Component } from "react"
import { Icon } from "@iconify/react"
import devTo from "@iconify/icons-mdi/dev-to"
import gmailIcon from "@iconify/icons-cib/gmail"

class ContactIcons extends Component {
  render() {
    return (
      <Fragment>
        {" "}
        <div className="flex-container">
          <span>
            <div className="flex-item gmail">
              <a
                href="mailto: emchimilio@gmail.com"
                target="_blank"
                rel="noreferrer"
                style={{ marginBottom: "20px" }}
              >
                <Icon icon={gmailIcon} />
              </a>
            </div>
          </span>
          <span>
            <div className="flex-item github">
              <a href="https://github.com/elba3184/" target="_blank">
                <i className="devicon-github-plain-wordmark"></i>
              </a>
            </div>
          </span>
          <span>
            <div className="flex-item linkedin">
              <a
                href=" https://www.linkedin.com/in/elbachimilio/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="devicon-linkedin-plain"></i>
              </a>
            </div>
          </span>
          <span>
            <div className="flex-item dev">
              <a href="https://dev.to/elba3184" target="_blank" rel="noreferrer">
                <Icon icon={devTo} />
              </a>
            </div>
          </span>
        </div>
      </Fragment>
    )
  }
}

export default ContactIcons
