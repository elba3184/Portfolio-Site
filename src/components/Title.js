import React, { Fragment, Component } from "react"
import { Transition } from "react-spring/renderprops"
import Typing from "react-typing-animation"
import TextLoop from "react-text-loop"
import "../scss/CustomizedButton.scss"

class TitleTransition extends Component {
  render() {
    return (
      <Fragment>
        <Typing speed={30} className="hello-wrapper">
          <div className="title">Hello, my name is</div>
        </Typing>
        <Typing speed={80} className="subtitle-wrapper">
          <Typing.Delay ms={1600} />
          <div className="subtitle-container">
            <div className="subtitle">
              <span className="sky-blue-text">Elba Chimilio</span>
            </div>
          </div>
        </Typing>
        <div className="description">
          <Typing>
            <Typing.Delay ms={3200} />
            <div className="subtitle-white">I'm a(n) </div>
          </Typing>
          <SubtitleTransition />
        </div>
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
                className="text-loop-wrapper"
                interval={3200}
                delay={1400}
                noWrap={true}
                mask={true}
                springConfig={{ stiffness: "320", damping: "40" }}
              >
                <span className="light-text">
                  Tiktok Addict <span role="img">💃</span>
                </span>
                <span className="sky-blue-text">
                  Full-Stack Developer <span role="img">👩🏽‍💻</span>
                </span>
                <span>
                  <span className="purple-text">Comicbook Fanatic </span>
                  <span role="img">🦸‍♀️</span>
                </span>
                <span>
                  <span className="light-text">Artist </span>
                  <span role="img">🎨</span>
                </span>
                <span className="sky-blue-text">
                  Florida Gator <span role="img">🐊</span>
                </span>
                <span className="light-text">
                  Movie Enthusiast <span role="img">🎬</span>
                </span>
                <span>
                  <span className="purple-text">Adventurer </span>
                  <span role="img">🌎</span>
                </span>
                <span>
                  <span className="sky-blue-text">Ironhack Alumn </span>
                  <span role="img">👩🏽‍🎓</span>
                </span>
                <span className="light-text">
                  Animal Crossing Expert <span role="img">🐶</span>
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
      <div className="title-wrapper">
        <TitleTransition />
      </div>
    </Fragment>
  )
}

export default Title
