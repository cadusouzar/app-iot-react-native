import React, {useState} from "react";
import { View } from "react-native";
import Conta from "../../Conta";
import styles from './style'
import { useRoute } from '@react-navigation/native';

export default function Account({navigation}){
  const [nomeLogado, setNomeLogado] = useState('');
  const route = useRoute();
  
  // Movido para dentro do escopo da função
  useState(() => {
    setNomeLogado(route.params?.nomeLogado);
  }, []);
  console.log(nomeLogado)

  return(
    <View style={styles.background}>
      <Conta navigation={navigation} nomeLogado={nomeLogado}/>
    </View>
  )
}