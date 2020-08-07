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
              <label>
                <h6>
                  Name <span className="asterisk-red">*</span>
                </h6>
                <input type="text" required name="name" id="name" />
              </label>
              <label>
                <h6>
                  Email <span className="asterisk-red">*</span>
                </h6>
                <input type="email" required name="email" id="email" />
              </label>
              <label>
                <h6>
                  Subject <span className="asterisk-red">*</span>
                </h6>
                <input type="text" required name="subject" id="subject" />
              </label>
              <label>
                <h6>
                  Message <span className="asterisk-red">*</span>
                </h6>
                <textarea name="message" required id="message" rows="5" />
              </label>
              <input type="reset" value="Clear" />
            </div>
            <div className="submit-button-container">
              {" "}
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </Fragment>
    )
  }
}

export default ContactForm
