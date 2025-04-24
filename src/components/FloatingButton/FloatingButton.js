import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import styles from "./FloatingButton.style";

function FloatingButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon name="plus" size={30} color={"white"} />
    </TouchableOpacity>
  );
}
export default FloatingButton;
