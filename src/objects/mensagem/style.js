import { StyleSheet } from "react-native";
import { textColor } from "../../styles/settings/colors";
import { Middlefont } from "../../styles/settings/size";

const styles = StyleSheet.create({
  mensagem: {
    marginLeft: 24,
    marginRight: 24,
    textAlign: "center",
    color: textColor,
    fontFamily: "Quicksand-Regular",
    fontSize: Middlefont
  }
});

export default styles