import React from "react";
import { View, Text, FlatList } from "react-native";
import styles from './style'
import HeaderEspecificacoes from '../../components/headerEspecificacoes'
import {sensores} from '../../data/Sensores'

export default function ListEspecificacoes(){

  const renderItem = ({ item }) => {
    return (
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.descricao}>{item.description}</Text>
      </View>
    );
  };

  return (
      <FlatList
        ListHeaderComponent={<HeaderEspecificacoes/>}
        data={sensores}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
  );
}