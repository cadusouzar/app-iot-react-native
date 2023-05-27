import { StyleSheet } from "react-native";
import { Bigfont} from '../../styles/settings/size'
import {textColor} from '../../styles/settings/colors'

const styles = StyleSheet.create({
  titulo: {
    marginTop:"3%",
    fontSize: Bigfont,
    color: textColor,
    fontFamily: 'Quicksand-Bold'
  },
})

export default styles