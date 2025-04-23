import { Text, View, TouchableOpacity, ActivityIndicator } from "react-native";
import styles from "./Button.style";

function Button({ text, onPress, loading }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {loading ? (
        <ActivityIndicator size={30} />
      ) : (
        <Text style={styles.text}>{text}</Text>
      )}
    </TouchableOpacity>
  );
}
export default Button;
