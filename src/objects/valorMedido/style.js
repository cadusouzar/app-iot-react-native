import { StyleSheet } from "react-native";
import { colorZero, primaryColor } from "../../styles/settings/colors";
import { Middlefont } from "../../styles/settings/size";

const styles = StyleSheet.create({
  container:{
    backgroundColor: primaryColor,
    borderRadius: 30,
    top: "100%"
  },
  texto:{
    textAlign: "center",
    fontSize: Middlefont,
    fontFamily: 'Quicksand-Bold',
    color: colorZero,
    padding: 16,
    paddingLeft: 30,
    paddingRight: 30    
  },
});

export default styles