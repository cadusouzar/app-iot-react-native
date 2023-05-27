import { StyleSheet } from "react-native";
import { Smallfont, Middlefont} from '../../styles/settings/size'
import {textColor} from '../../styles/settings/colors'

const styles = StyleSheet.create({
  name:{
    marginBottom: ".5%",
    marginLeft: "3%",
    marginTop: "5%",
    fontFamily: 'Quicksand-Bold',
    fontSize: Middlefont,
    color: textColor
  },
  descricao:{
    marginLeft: "3%",
    color: textColor,
    fontSize: Smallfont
  },
})

export default styles

