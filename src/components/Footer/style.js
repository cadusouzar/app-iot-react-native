import { StyleSheet } from "react-native";
import {secondColor} from '../../styles/settings/colors'

const styles = StyleSheet.create({
  containerFooter:{
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'space-around',
    width: "100%",
    backgroundColor: secondColor,
    height: "7%",
  },
});

export default styles