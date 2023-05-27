import React from "react";
import { View } from "react-native";
import ReturnButton from "../../../objects/returnButton";
import FogoLottie from "../../../objects/fogoLottie";
import styles from './style'
import ValorMedido from "../../../objects/valorMedido";

function SensorDeChama({navigation}){
  return(
    <View style={styles.container}>
      <ReturnButton texto="Sensor de chama" handlePress={() =>  navigation.goBack()}/>
      <ValorMedido texto="50m³"/>
      <FogoLottie/>
    </View>
  )
}

export default SensorDeChama