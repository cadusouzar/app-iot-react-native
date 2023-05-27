import { StyleSheet } from "react-native";
import {colorZero, primaryColor, secondColor, backgroundColor} from '../../styles/settings/colors'


const styles = StyleSheet.create({
  containerButton:{
    alignItems: "center",
    marginBottom: "22.5%",
    marginTop: "20%",
  },
  button: {
    backgroundColor: primaryColor,
    padding: 15,
    borderRadius: 100,
  },
  buttonText: {
    fontSize: 20,
    color: colorZero,
    fontFamily: "Quicksand-Bold",
  }
});

export default styles