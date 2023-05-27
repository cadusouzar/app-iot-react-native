import React, { useState } from "react";
import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard } from "react-native";
import styles from './style'
import ContainerMiddle from '../../../objects/container-middle'
import ButtonLogin from "../../../objects/buttonLogin";
import api from '../../../services/api'
import axios from "axios";
export default function Login({ navigation }) {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
  
  function goLogin() {

    api.post(`https://simiapi.azurewebsites.net/Usuario/Validar?login=${login}&senha=${senha}`)
    .then((resp) => {
      console.log(resp.data)
      navigation.navigate("Home");
    })
    .catch((err)=> {
      console.log(err)
    })

  }
  
  return (
    <>
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View style={styles.container}>
          <ContainerMiddle>
            <View style={styles.containerLogin}>
              <Text style={styles.textoLogin}>Fazer Login</Text>
              <Text style={styles.texto}>Nome de usuário</Text>
              <TextInput
                style={styles.input}
                placeholder="Ex. meuLogin"
                onChangeText={setLogin}
                value={login}
              />

              <Text style={styles.texto}>Senha</Text>
              <TextInput
                style={styles.input}
                placeholder="Ex. 1234567"
                secureTextEntry={true}
                onChangeText={setSenha}
                value={senha}
              />

              <ButtonLogin txtButton="Entrar" handlePress={goLogin} />
              <ButtonLogin txtButton="Fazer registro" handlePress={() => navigation.navigate("Registro")} />
            </View>
          </ContainerMiddle>
        </View>
      </TouchableWithoutFeedback>
    </>
  )
}
