import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styles from './style'
import ContainerMiddle from "../container-middle";

export default function RedirectButton({texto}){
  return(
    <ContainerMiddle>
      <TouchableOpacity style={styles.containerTexto}>
        <Text style={styles.textoSenha}>
          {texto}
        </Text>
      </TouchableOpacity>
    </ContainerMiddle>
  )
}