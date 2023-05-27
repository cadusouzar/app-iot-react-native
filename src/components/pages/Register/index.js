import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard } from "react-native";
import styles from './style'
import ContainerMiddle from '../../../objects/container-middle'
import ButtonLogin from "../../../objects/buttonLogin";
import ReturnButton from "../../../objects/returnButton";

export default function Registro({navigation}){
  const [loginRegistro, setLoginRegistro] = useState('')
  const [senhaRegistro, setSenhaRegistro] = useState('')
  const [enderecoRegistro, setEnderecoRegistro] = useState('')

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return(
    <>
    <ReturnButton texto="Voltar ao login" handlePress={() => navigation.goBack()}/>
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View style={styles.container}>
          <ContainerMiddle>
            <View style={styles.containerLogin}>
              <Text style={styles.textoRegistro}>Registre-se</Text>
              <Text style={styles.texto}>Nome de usuário</Text>
              <TextInput
                style={styles.input}
                placeholder="Ex. meuLogin"
                onChangeText={setLoginRegistro}
                value={loginRegistro}
              />

              <Text style={styles.texto}>Senha</Text>
              <TextInput
                style={styles.input}
                placeholder="Ex. 1234567"
                secureTextEntry={true}
                onChangeText={setSenhaRegistro}
                value={senhaRegistro}
              />

              <Text style={styles.texto}>Endereço</Text>
              <TextInput
                style={styles.input}
                placeholder="Ex. Rua mentlesnel, 1032"
                onChangeText={setSenhaRegistro}
                value={senhaRegistro}
              />
              <ButtonLogin txtButton="Registrar"/>
            </View>
          </ContainerMiddle>
        </View>
      </TouchableWithoutFeedback>
    </>
  )
}
