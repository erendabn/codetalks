import { Text, View, TouchableOpacity } from "react-native";
import styles from "./Button.style";

function Button({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}
export default Button;
