import React from "react"
import ContactForm from "../components/ContactForm"

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-title">Let's make something great together!</div>
      <div className="contact-subtitle">
        {" "}
        I'm always looking for new ways to immerse myself in tech! Please feel
        free to contact me!
      </div>
      <ContactForm />
    </div>
  )
}
