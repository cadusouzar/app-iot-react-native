import React from 'react';
import {Text} from 'react-native';
import ContainerMiddle from '../container-middle';
import styles from './style'

export default function Mensagem({texto}) {
  return(
    <ContainerMiddle>
      <Text style={styles.mensagem}>
        {texto}
      </Text>
    </ContainerMiddle>
  )
}
