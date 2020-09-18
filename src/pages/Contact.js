import React from "react"
// import { Icon } from "@iconify/react"
// import devTo from "@iconify/icons-mdi/dev-to"
// import gmailIcon from "@iconify/icons-cib/gmail"
import ContactForm from "../components/ContactForm"

export default function Contact() {
  return (
    <div className="contact-container">
      {/* <i className="devicon-github-plain-wordmark"></i>
      <i className="devicon-linkedin-plain"></i> */}
      <div className="contact-title">Let's make something great together!</div>
      <div className="contact-subtitle">
        {" "}
        I'm always looking for new ways to immerse myself in tech! Please feel
        free to contact me!
        {/* <ContactIcons />  */}
      </div>
      <ContactForm />
    </div>
  )
}
