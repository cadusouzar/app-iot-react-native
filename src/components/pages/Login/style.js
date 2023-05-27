import { StyleSheet } from "react-native";
import { backgroundColor, secondColor, colorZero } from "../../../styles/settings/colors";
import {Bigfont, Middlefont, Smallfont} from '../../../styles/settings/size'

const styles = StyleSheet.create({
  container:{
    backgroundColor: backgroundColor,
    height: "100%",
    justifyContent: "center"
  },
  containerLogin:{
    backgroundColor: secondColor,
    borderRadius: 10,
    padding: 20,
    paddingTop: 100,
    paddingBottom: 0
  },
  textoLogin:{
    fontFamily: 'Quicksand-Regular',
    color: colorZero,
    fontSize: Bigfont,
    textAlign: "center",
    top: "-40%",
    marginTop: 70
  },
  texto:{
    fontFamily: 'Quicksand-Regular',
    color: colorZero,
    fontSize: Middlefont,
    textAlign: "center",
    top: "-30%"
  },
  input:{
    fontFamily: 'Quicksand-Regular',
    fontSize: Middlefont,
    textAlign: "center",
    borderColor: colorZero,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 15,
    width: 300,
    marginBottom: 30,
    top: "-30%",
    backgroundColor: colorZero
  }
});

export default styles