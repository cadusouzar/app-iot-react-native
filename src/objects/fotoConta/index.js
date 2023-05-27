import React from "react";
import { Image } from "react-native";
import ContainerMiddle from '../container-middle'
import styles from './style';

export default function FotoConta({ source }) {
  return (
    <ContainerMiddle>
      <Image
        style={styles.imagem}
        source={source}
      />
    </ContainerMiddle>
  );
}