import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

export default StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: colors.orangeA700,
    justifyContent: "center",
  },
  header_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 30,
    color: "white",
    padding: 20,
  },
  inner_container: {
    margin: 0,
    padding: 0,
    flex: 1,
  },
});
