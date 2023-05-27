import React from "react";
import { View } from "react-native";
import ReturnButton from '../../objects/returnButton';
import FotoConta from '../../objects/fotoConta'
import Mensagem from '../../objects/mensagem'
import RedirectButton from "../../objects/redirectButton";
import Button from '../../objects/button-opacity'

export default function Conta({navigation}) {
  const src = require('../../images/device.png');

  return (
    <View>
      <ReturnButton texto="Perfil" handlePress={() => navigation.goBack()}/>
      <FotoConta source={src} />
      <Mensagem texto="Meu nome"/>
      <Mensagem texto="Meu Endereco"/>
      <RedirectButton texto="Deseja trocar sua senha?"/>
      <Button txtButton="Log Out"/>
    </View>
  );
}