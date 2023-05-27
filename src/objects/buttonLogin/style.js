import { StyleSheet } from "react-native";
import {colorZero, primaryColor, secondColor, backgroundColor} from '../../styles/settings/colors'


const styles = StyleSheet.create({
  containerButton:{
    alignItems: "center",
    top: "-25%",
    marginTop: "5%",
  },
  button: {
    backgroundColor: primaryColor,
    padding: 15,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 20,
    color: colorZero,
    fontFamily: "Quicksand-Bold",
  }
});

export default styles