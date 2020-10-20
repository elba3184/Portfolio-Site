import React, { Fragment } from "react"
import Typing, {  Backspace  } from "react-typing-animation"
import "../scss/CodeSnippet.scss"

const CodeSnippet = () => {
  return (
    <Fragment>
      <div className="read-me-container">
        <pre>
          <Fragment>
            <Typing speed={20}>
              <span>console.log("Hello, World!");
                <Backspace count={30} speed={80}/>
              {"README.md"}
              </span>
            </Typing>
          </Fragment>
          <span></span>
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
            While attending the <b>University of Florida</b>, I became
          </span>
          <span>
            addicted to Starbucks coffee{" "}
            <i style={{ textDecoration: "line-through" }}>for survival</i> 😬.
            In between the madness, I
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
            in <b>New York (The Big 🍎)!</b>
          </span>
        </pre>
      </div>
    </Fragment>
  )
}

export default CodeSnippet;
