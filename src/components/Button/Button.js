import { Text, View, TouchableOpacity, ActivityIndicator } from "react-native";
import styles from "./Button.style";

function Button({ text, onPress, loading, theme = "primary" }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles[theme].container}>
      {loading ? (
        <ActivityIndicator size={30} />
      ) : (
        <Text style={styles[theme].text}>{text}</Text>
      )}
    </TouchableOpacity>
  );
}
export default Button;
