import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "white",
    margin: 10,

    borderRadius: 15,
    padding: 15,
  },
  inner_container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  user: {
    fontSize: 14,
  },
  date: {
    fontSize: 14,
    fontStyle: "italic",
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
