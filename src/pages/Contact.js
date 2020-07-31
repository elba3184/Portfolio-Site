import React, { Fragment, Component } from "react"
import { Icon } from "@iconify/react"
import devTo from "@iconify/icons-mdi/dev-to"
import gmailIcon from "@iconify/icons-cib/gmail"
import ContactForm from "../components/ContactForm"

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
              >
                <i className="devicon-linkedin-plain"></i>
              </a>
            </div>
          </span>
          <span>
            <div className="flex-item dev">
              <a href="https://dev.to/elba3184" target="_blank">
                <Icon icon={devTo} />
              </a>
            </div>
          </span>
        </div>
      </Fragment>
    )
  }
}

const Contact = () => {
  return (
    <div className="contact-container">
      {/* <i className="devicon-github-plain-wordmark"></i>
      <i className="devicon-linkedin-plain"></i> */}
      <div className="contact-title">CONTACT ME</div>
      <div className="contact-subtitle">
        {" "}
        I'm always looking for new ways to immerse myself in tech! Please feel
        free to contact me!
        <ContactIcons />
      </div>
      <ContactForm />
    </div>
  )
}

export default Contact
