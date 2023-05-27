import React from "react";
import { Image, View } from "react-native";
import LottieView from 'lottie-react-native'
import ReturnButton from '../../../objects/returnButton'
import ValorMedido from "../../../objects/valorMedido";
import styles from './style'

export default function Gases({navigation}){
  return(
  <View style={styles.container}>
    <ReturnButton texto="Sensor de gases" handlePress={() =>  navigation.goBack()}/>
    <ValorMedido texto="50m³"/>
    <View style={{flexDirection: "row", justifyContent: "space-around"}}>
      <LottieView 
      style={{width: 300, left: "9%", top: "15%"}}
      source={require('./88820-smoke-postin.json')}
      autoPlay
      />

      <LottieView 
      style={{width: 300, top: "6%"}}
      source={require('./88820-smoke-postin.json')}
      autoPlay
      />

      <LottieView 
      style={{width: 300, right: "8%", top: "15%"}}
      source={require('./88820-smoke-postin.json')}
      autoPlay
      />
    </View>
      <Image
      style={styles.imagem}
      source={require('../../../images/gas-tank.png')}
      />
  </View>
  )
}