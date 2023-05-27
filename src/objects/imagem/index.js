import React from 'react';
import { Image, View } from 'react-native';
import ContainerMiddle from '../container-middle'
import styles from './style';
import Carousel from 'react-native-snap-carousel';
import {imagens} from '../../data/imagensCarrossel/ImagensCarrossel'


export default function Carrossel() {

  const renderItem = ({ item }) => {
    return (
      <View style={styles.containerImagem}>
        <Image style={{width: 350, height: 350}} source={item.source}/>
      </View>
    );
  };

  return(
    <ContainerMiddle>
      <Carousel
      data={imagens}
      renderItem={renderItem}
      sliderWidth={500}
      itemWidth={350}
      />
    </ContainerMiddle>
  )
}