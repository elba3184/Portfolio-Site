import React, { Fragment, Component } from "react"
import { Transition } from "react-spring/renderprops"
import Typing from "react-typing-animation"
import TextLoop from "react-text-loop"
import "../scss/AboutButton.scss"

class TitleTransition extends Component {
  render() {
    return (
      <Fragment>
        <Typing speed={120}>
          <div className="title">WELCOME!</div>
        </Typing>
        <Typing speed={40}>
          <Typing.Delay ms={1800} />
          <div>
            <div className="subtitle">
              My name is <span className="dark-green-text">Elba</span> and I'm a
              <span className="dark-green-text">(n)</span>
            </div>
          </div>
        </Typing>
      </Fragment>
    )
  }
}

class SubtitleTransition extends Component {
  render() {
    return (
      <Transition
        trail={4500}
        items={false}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
      >
        {show =>
          true &&
          (props => (
            <div style={props} className="subtitle-options">
              <TextLoop
                interval={3000}
                delay={1800}
                noWrap={true}
                mask={true}
                springConfig={{ stiffness: "340", damping: "30" }}
              >
                <span className="dark-green-text">
                  FULL-STACK WEB DEVELOPER <span role="img">👩🏽‍💻</span>
                </span>
                <span className="light-text">
                  TIKTOK ADDICT <span role="img">💃</span>
                </span>
                <span>
                  <span className="dark-green-text">COMICBOOK FANATIC </span>
                  <span role="img">🦸‍♀️</span>
                </span>
                <span>
                  <span className="light-text">ARTIST </span>
                  <span role="img">🎨</span>
                </span>
                <span className="dark-green-text">
                  FLORIDA GATOR <span role="img">🐊</span>
                </span>
                <span className="dark-green-text">
                  MOVIE ENTHUSIAST <span role="img">🎬</span>
                </span>
                <span>
                  <span className="light-text">ADVENTURER </span>
                  <span role="img">🌎</span>
                </span>
                <span>
                  <span className="dark-green-text">IRONHACK ALUMN </span>
                  <span role="img">👩🏽‍🎓</span>
                </span>
                <span className="light-text">
                  ANIMAL CROSSING EXPERT <span role="img">🐶</span>
                </span>
              </TextLoop>{" "}
            </div>
          ))
        }
      </Transition>
    )
  }
}

const Title = () => {
  return (
    <Fragment>
      <TitleTransition />
      <div className="subtitle-container">
        <SubtitleTransition />
      </div>
    </Fragment>
  )
}

export default Title
