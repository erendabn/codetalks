import { StyleSheet } from "react-native";

const baseStyle = StyleSheet.create({
  container: {
    padding: 15,
    margin: 10,
    borderRadius: 15,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default {
  primary: StyleSheet.create({
    ...baseStyle,
    container: {
      ...baseStyle.container,
      backgroundColor: "orange",
    },
    text: {
      ...baseStyle.text,
      color: "white",
    },
  }),

  secondary: StyleSheet.create({
    ...baseStyle,
    container: {
      ...baseStyle.container,
      backgroundColor: "white",
    },
    text: {
      ...baseStyle.text,
      color: "orange",
    },
  }),
};
