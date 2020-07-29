import React, { Fragment, Component } from "react"
import Typing, { Delay, Speed } from "react-typing-animation"
import "../css/CodeSnippet.scss"

class TitleTransition extends Component {
  render() {
    return (
      <Fragment>
        <Typing speed={100}>
          {/* <span>console.log("Hello, World!");</span>
          <Typing.Backspace count={40} />
          <span>This line will stay.</span>
          <span>This line will get instantly removed after a 500 ms delay</span>
          <Typing.Reset count={1} delay={500} /> */}
          <Delay ms={1000} />
          <li>
            <span> &#10004;</span> Change the <Speed ms={250} /> speed{" "}
            <Speed ms={20} /> of typing anywhere <Speed ms={40} /> in the tree.
          </li>
        </Typing>
      </Fragment>
    )
  }
}

const CodeSnippet = () => {
  return (
    <Fragment>
      <div class="read-me-container">
        <pre>
          <span>README.md</span>
          <span className="read-me-title">
            <b>Description: </b>
            <i>
              A driven Full-Stack Developer and devoted Starbucks customer ☕️
            </i>
          </span>

          <span></span>

          <span>
            I began my journey into software development back in August 2014.
          </span>
          <span>
            While attending the <b>University of Florida</b>, I took Mathematics
            and Computer
          </span>
          <span>
            Science coursework on top of my Philosophy classes. Naturally, I
            became
          </span>
          <span>
            addicted to Starbucks coffee for survival 😬. In between the
            madness, I
          </span>
          <span>
            discovered a passion for <i>robotics</i> and <i>engineering</i> in
            its various forms.
          </span>
          <span>
            After a few projects, I joined and later became the President of
          </span>
          <span>Gator Robotics 🤖.</span>

          <span></span>

          <span>
            I graduated from UF in December 2018 with a
            <b> Bachelor's of Art in Philosophy 📝.</b>
          </span>
          <span>
            Wanting to begin a career in software development, I attended
            <b> Ironhack’s</b>
          </span>
          <span>
            <b>Full-Stack Web Development Bootcamp</b> in Miami, FL in August
            2019. I met
          </span>
          <span>
            amazing developers, built fun projects, and grew my skillset
            exponentially 📈.
          </span>
          <span>
            I graduated from Ironhack in October 2019 🎊 and took my first job
            as a
          </span>
          <span>Frontend Web Developer in January 2020.</span>
          <span></span>
          <span>
            I'm currently seeking new opportunities as a <i>Frontend</i> or
            <i> Full-Stack Web Developer</i>
          </span>
          <span>
            in <b>New York City (The Big 🍎)!</b>
          </span>
          {/* <span>
            - 🌱 I’m currently learning **Serverless Framework, AWS Services and
            Gatsby**
          </span>
          <span>
            - ⚡ Fun fact **I'm good at memorizing commercial jingles**
          </span> */}
        </pre>
      </div>
    </Fragment>
  )
}

export default CodeSnippet
