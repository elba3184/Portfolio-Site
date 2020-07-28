import React from "react"
import { Transition } from "react-spring/renderprops"
import ConfettiAnimation from "../components/ConfettiAnimation"
import Title from "../components/Title"
import "../css/Home.css"

const Home = () => {
  const items = [
    "Full-Stack Web Developer 👩🏽‍💻",
    "Artist 🎨",
    "Booklover 📚",
    "Adventurer 🌎",
    "TikTok Addict 💃",
    "Movie Enthusiast 🎬",
    "Animal Crossing Expert 🐶",
  ]

  return (
    <div className="skewed-bg">
      <ConfettiAnimation />
      <div>
        <div
          style={{
            justifyContent: "center",
          }}
        >
          <Title />
        </div>

        <Transition
          items={items}
          keys={item => item.key}
          from={{ transform: "translate3d(0,-40px,0)" }}
          enter={{ transform: "translate3d(0,0px,0)" }}
          leave={{ transform: "translate3d(0,-40px,0)" }}
        >
          {item => props => <div style={props}>{item.text}</div>}
        </Transition>
      </div>
    </div>
  )
}

export default Home
