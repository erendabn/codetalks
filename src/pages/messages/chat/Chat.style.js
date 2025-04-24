import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.orangeA200,
  },
  title_container: {
    alignSelf: "stretch",
    alignItems: "center",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 1,
    borderStyle: "dashed",
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
