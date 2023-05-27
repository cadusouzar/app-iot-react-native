import React from "react";
import { View } from "react-native";
import ReturnButton from '../../objects/returnButton';
import FotoConta from '../../objects/fotoConta'
import Mensagem from '../../objects/mensagem'
import RedirectButton from "../../objects/redirectButton";
import Button from '../../objects/button-opacity'

export default function Conta({navigation, nomeLogado}) {
  const src = require('../../images/account.png');

  return (
    <View>
      <ReturnButton texto="Perfil" handlePress={() => navigation.goBack()}/>
      <FotoConta source={src} />
      <Mensagem texto={nomeLogado}/>
      <RedirectButton texto="Deseja trocar sua senha?"/>
      <Button txtButton="Log Out" handlePress={() => navigation.navigate('Login')}/>
    </View>
  );
}