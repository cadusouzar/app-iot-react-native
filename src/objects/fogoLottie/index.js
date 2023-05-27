import React from "react";
import LottieView from 'lottie-react-native'


function FogoLottie() {

  return(
    <LottieView 
    style={{height: 580, left: "-3%", top: "7%"}}
    source={require('./125679-fire.json')}
    autoPlay
    />
  )
}

export default FogoLottie;
