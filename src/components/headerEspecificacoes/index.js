import React from "react";
import { View } from "react-native";
import Titulo from '../../objects/titulo';
import Carrossel from "../../objects/imagem";

export default function HeaderEspecificacoes(){
  const source = require('../../images/device.png')
  return(
    <View>
      <Carrossel/>
      <Titulo text="Especificações" />
    </View>
  )
}