import React from "react";
import styles from './style'
import { View, Text } from "react-native";
import ContainerMiddle from '../container-middle'

function ValorMedido({texto}){
  return(
    <ContainerMiddle>
      <View style={styles.container}>
        <Text style={styles.texto}>{texto}</Text>
      </View>
    </ContainerMiddle>
  )
}

export default ValorMedido