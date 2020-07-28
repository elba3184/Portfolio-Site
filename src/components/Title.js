import React, { Fragment } from "react"
import Typing from "react-typing-animation"

const Title = () => {
  return (
    <Fragment>
      <Typing speed={150}>
        <div className="title">Welcome!</div>
      </Typing>
      <Typing speed={40}>
        <Typing.Delay ms={1800} />
        <div>
          <div className="subtitle">My name is Elba and I'm a</div>
        </div>
      </Typing>
    </Fragment>
  )
}

export default Title
