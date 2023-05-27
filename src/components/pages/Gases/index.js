import React, { useEffect, useState } from "react";
import { Image, View } from "react-native";
import LottieView from 'lottie-react-native'
import ReturnButton from '../../../objects/returnButton'
import ValorMedido from "../../../objects/valorMedido";
import styles from './style'
import api from "../../../services/api";
import axios from "axios";

export default function Gases({navigation}){
  const [gasMedido, setGasMedido] = useState('');

  useEffect(() => {
    const fetchData = () => {
      api.get(`https://simiapi.azurewebsites.net/Leitura/ListarLeituras/?idDispositivo=${1}`)
        .then((resp) => {
          const ultimaLeitura = resp.data[resp.data.length - 1];
          setGasMedido(ultimaLeitura.valorGas);
        })
        .catch(err => console.log(err));
    };
  
    fetchData();
  
    const interval = setInterval(fetchData, 30000);
  
    return () => {
      clearInterval(interval);
    };
  }, []);
  


  return(
  <View style={styles.container}>
    <ReturnButton texto="Sensor de gases" handlePress={() =>  navigation.goBack()}/>
    {gasMedido? (
      <ValorMedido texto={gasMedido.toString()}/>
    ): <ValorMedido texto="Sem presença de gás"/>}

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