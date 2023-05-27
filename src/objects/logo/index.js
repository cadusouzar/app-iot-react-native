import React from 'react';
import { Image } from 'react-native';
import styles from './style'
import ContainerMiddle from '../container-middle'

export default function Logo() {
  return(
    <ContainerMiddle>
      <Image 
      style={styles.imagem}
      source={require('../../images/logo-grande1.png')}
      />
    </ContainerMiddle>
  )
}
