import React from "react";
import { View } from "react-native";
import ReturnButton from "../../../objects/returnButton";
import FogoLottie from "../../../objects/fogoLottie";
import styles from './style'
import ValorMedido from "../../../objects/valorMedido";

function SensorDeChama({navigation}){
  // const [gasMedido, setGasMedido] = useState('');

  // useEffect(() => {
  //   const fetchData = () => {
  //     api.get(`https://simiapi.azurewebsites.net/Leitura/ListarLeituras/?idDispositivo=${1}`)
  //       .then((resp) => {
  //         const ultimaLeitura = resp.data[resp.data.length - 1];
  //         setGasMedido(ultimaLeitura.valorGas);
  //       })
  //       .catch(err => console.log(err));
  //   };
  
  //   fetchData();
  
  //   const interval = setInterval(fetchData, 30000);
  
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  return(
    <View style={styles.container}>
      <ReturnButton texto="Sensor de chama" handlePress={() =>  navigation.goBack()}/>
      <ValorMedido texto="50m³"/>
      <FogoLottie/>
    </View>
  )
}

export default SensorDeChama