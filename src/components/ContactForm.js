import React, { Fragment, Component } from "react"
import "../scss/ContactForm.scss"

class ContactForm extends Component {
  render() {
    return (
      <Fragment>
        <div className="contact-form-container">
          <form
            className="form"
            method="POST"
            action="https://getform.io/f/14d13f48-05c2-4124-9c8a-6f37ec49628e"
          >
            <div className="form-items">
              <div className="form-row">
                <label className="row-label">
                  <h6>
                    Name <span className="asterisk-red">*</span>
                  </h6>
                  <input
                    type="text"
                    required
                    name="name"
                    id="name"
                    aria-label="Name"
                    placeholder="John Doe"
                  />
                </label>
                <label className="row-label">
                  <h6>
                    Email <span className="asterisk-red">*</span>
                  </h6>
                  <input
                    type="email"
                    required
                    name="email"
                    id="email"
                    aria-label="Email"
                    placeholder="johndoe@gmail.com"
                  />
                </label>
              </div>
              <div className="form-row">
              <label className="row-label">
                <h6>Phone Number</h6>
                <input
                  type="tel"
                  required
                  name="phone"
                  id="phone"
                  aria-label="Phone"
                  placeholder="(123) 456-7890"
                />
              </label>
              <label className="row-label">
                <h6>
                  Subject <span className="asterisk-red">*</span>
                </h6>
                <input
                  type="text"
                  required
                  name="subject"
                  id="subject"
                  aria-label="Subject"
                  placeholder="Let's Connect"
                />
              </label>
              </div>
              <label>
                <h6>
                  Message <span className="asterisk-red">*</span>
                </h6>
                <textarea
                  name="message"
                  required
                  id="message"
                  rows="5"
                  aria-label="Message"
                  placeholder="Hi, Elba! I would love to discuss your background more. Let's get in touch!"
                />
              </label>
              <input type="reset" value="Clear" className="clear-btn" />
            <div className="submit-button-container">
              {" "}
              <button type="submit">Send</button>
            </div>
            </div>
          </form>
        </div>
      </Fragment>
    )
  }
}

export default ContactForm
