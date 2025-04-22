import { TextInput, View } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import styles from "./Input.style";

function Input({ icon, onTextChange, value, placeholder }) {
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onTextChange}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={"white"}
        style={styles.input}
        maxLength={45}
        autoCapitalize="none"
      />
      <Icon name={icon} size={30} />
    </View>
  );
}
export default Input;
