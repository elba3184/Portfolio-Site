import React from "react"
import { useWindowSize } from "react-use"
import Confetti from "react-confetti"

const ConfettiAnimation = () => {
  const { width, height } = useWindowSize()
  return (
    <Confetti
      run={true}
      recycle={false}
      width={width}
      height={height}
      numberOfPieces={1500}
      opacity={0.8}
      friction={0.99}
      gravity={0.09}
    />
  )
}
export default ConfettiAnimation
