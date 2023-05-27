import React from "react";
import { Text, View } from "react-native";
import ContainerMiddle from '../container-middle'
import styles from './style'

export default function Titulo({text}){
  return(
    <ContainerMiddle>
      <Text style={styles.titulo}>
        {text}
      </Text>
    </ContainerMiddle>
  )
}