import React, { Fragment, Component } from "react"

class ContactForm extends Component {
  render() {
    return (
      <Fragment>
        <form
          method="POST"
          action="https://getform.io/f/14d13f48-05c2-4124-9c8a-6f37ec49628e"
        >
          <label>
            Name
            <input type="text" name="name" id="name" />
          </label>
          <label>
            Email
            <input type="email" name="email" id="email" />
          </label>
          <label>
            Subject
            <input type="text" name="subject" id="subject" />
          </label>
          <label>
            Message
            <textarea name="message" id="message" rows="5" />
          </label>
          {/* <input type="text" name="_gotcha" style="display:none" /> */}
          <button type="submit">Send</button>
          <input type="reset" value="Clear" />
        </form>
      </Fragment>
    )
  }
}

export default ContactForm
