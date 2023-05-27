import { StyleSheet } from "react-native";
import {Smallfont, Bigfont} from '../../styles/settings/size'
import {textColor} from '../../styles/settings/colors'

const styles = StyleSheet.create({
  bemVindo: {
    marginTop:"25%",
    fontSize: Bigfont,
    color: textColor,
    fontFamily: 'Quicksand-Bold'
  },
  mensagem: {
    fontSize: Smallfont,
    color: textColor,
    fontFamily: 'Quicksand-Regular'
  }
});


export default styles

