import React, {useState, useEffect} from "react";
import { View } from "react-native";
import ReturnButton from "../../../objects/returnButton";
import FogoLottie from "../../../objects/fogoLottie";
import styles from './style'
import ValorMedido from "../../../objects/valorMedido";
import api from '../../../services/api'

function SensorDeChama({navigation}){
  const [chamaMedida, setchamaMedida] = useState('');

  useEffect(() => {
    const fetchData = () => {
      api.get(`https://simiapi.azurewebsites.net/Leitura/ListarLeituras/?idDispositivo=${1}`)
        .then((resp) => {
          const ultimaLeitura = resp.data[resp.data.length - 1];
          setchamaMedida(ultimaLeitura.valorChama);
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
      <ReturnButton texto="Sensor de chama" handlePress={() =>  navigation.goBack()}/>
      {chamaMedida? <ValorMedido texto={"Atenção! Chama presente"}/> : <ValorMedido texto="Sem valor de fogo no ambiente"/>}
      <FogoLottie/>
    </View>
  )
}

export default SensorDeChama