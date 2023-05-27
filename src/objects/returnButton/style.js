import { StyleSheet } from "react-native";
import { colorZero, secondColor } from "../../styles/settings/colors";
import {Middlefont} from '../../styles/settings/size'
const styles = StyleSheet.create({
  containerBackground:{
    backgroundColor: secondColor,
    minHeight: 85,
    paddingTop: "9%"
  },
  container:{
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  icon:{
    marginLeft: "3%",
    color: colorZero
  },
  texto:{
    marginLeft: "5%",
    fontFamily: 'Quicksand-Bold',
    color: colorZero,
    fontSize: Middlefont
  },
});

export default styles

