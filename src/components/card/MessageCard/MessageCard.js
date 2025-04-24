import React from "react";
import { View, Text } from "react-native";
import { formatDistance, parseISO } from "date-fns";
import { tr } from "date-fns/locale";

import styles from "./MessageCard.style";

function MessageCard({ content }) {
  const formattedDate = formatDistance(parseISO(content.date), new Date(), {
    addSuffix: true,
    locale: tr,
  });

  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <Text style={styles.user}>{content.username}</Text>
        <Text style={styles.date}>{formattedDate}</Text>
      </View>
      <Text style={styles.text}>{content.text}</Text>
    </View>
  );
}
export default MessageCard;
