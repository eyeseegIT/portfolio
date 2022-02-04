import React from "react";
import Lottie from 'react-lottie-player'

const Animation = (props) => {

  return (
    <div>
      <Lottie
        loop
        animationData={props.animData}
        play
        speed={1}
        style={{ width: '500px', height: '500px' }}
      />
    </div>
  )
}
export default Animation