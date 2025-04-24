import React from "react";
import { TouchableOpacity, Text } from "react-native";

import styles from "./RoomCard.style";

function RoomCard({ room, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{room.name}</Text>
    </TouchableOpacity>
  );
}
export default RoomCard;
