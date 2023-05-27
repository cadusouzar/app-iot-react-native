import { StyleSheet } from "react-native";
import { primaryColor } from "../../styles/settings/colors";
import { Middlefont } from "../../styles/settings/size";

const styles = StyleSheet.create({
  containerTexto:{
    marginTop: "50%",
  },
  textoSenha:{
    color: primaryColor,
    fontSize: Middlefont
  }
});

export default styles