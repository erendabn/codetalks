import React, { useState } from "react";
import Modal from "react-native-modal";
import { View, Text, TextInput } from "react-native";

import styles from "./MessageInputModal.style";
import Button from "../../Button";

function MessageInputModal({ isVisible, onClose, onSend }) {
  const [text, setText] = useState(null);

  function handleSend() {
    if (!text) {
      return;
    } else {
      onSend(text);
      setText(null);
      onClose();
    }
  }

  return (
    <Modal
      isVisible={isVisible}
      swipeDirection="down"
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      style={styles.modal}
      avoidKeyboard
      hideModalContentWhileAnimating={true}
    >
      <View style={styles.container}>
        <View style={styles.input_container}>
          <TextInput
            placeholder="Mesajınız..."
            placeholderTextColor={"gray"}
            onChangeText={setText}
            multiline
          />
        </View>
        <Button text={"Mesaj Gönder"} onPress={handleSend} />
      </View>
    </Modal>
  );
}

export default MessageInputModal;
