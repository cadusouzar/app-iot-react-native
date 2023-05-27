import React, { Component } from 'react';
import { View, Linking } from 'react-native';

import BoasVindas from '../../objects/boas-vindas';
import Logo from '../../objects/logo';
import Mensagem from '../../objects/mensagem';
import Button from '../../objects/button-opacity';


export default function Menu() {
  const callFirefighters = () => {
    const phoneNumber = '193'; // Número dos bombeiros

    Linking.openURL(`tel:${phoneNumber}`);
  };

  return(
    <View>
      <BoasVindas nome="buscar api"/>
      <Logo/>
      <Mensagem texto="Aqui podemos ter acesso aos valores medidos nos sensores de gases, também o de chamas"/>
      <Button txtButton="Chamar bombeiros" handlePress={callFirefighters}/>
    </View>
  )
}
