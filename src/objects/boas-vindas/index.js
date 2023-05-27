import React, { Component } from 'react';
import { Text } from 'react-native';
import ContainerMiddle from '../container-middle'
import styles from './style'

export default function BoasVindas({nome}) {
  return(
    <ContainerMiddle>
      <Text style={styles.bemVindo}>Olá {nome}</Text>
      <Text style={styles.mensagem}>seja bem vindo ao aplicativo do seu dispositivo!</Text>
    </ContainerMiddle>
  )
}
