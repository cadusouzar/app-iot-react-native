import React, { useState } from "react";
import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard } from "react-native";
import styles from './style'
import ContainerMiddle from '../../../objects/container-middle'
import ButtonLogin from "../../../objects/buttonLogin";
import api from '../../../services/api'

export default function Login({ navigation }) {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [nomeLogado, setNomeLogado] = useState('')

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
  
  function goLogin() {
    api.post(`Usuario/Validar?login=${login}&senha=${senha}`)
    .then((resp) => {
      setNomeLogado(resp.data.nome)
      navigation.navigate("Home", {nomeLogado: nomeLogado});
      setLogin('')
      setSenha('')

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
