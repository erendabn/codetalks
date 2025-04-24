import { StyleSheet, Dimensions } from "react-native";

const deviceSize = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 20,
    margin: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "lightgray",
    height: deviceSize.height / 6,
    flex: 1,
  },
  text: { fontSize: 30, color: "orange" },
});
