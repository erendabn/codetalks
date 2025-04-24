import React, { useState, useEffect } from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import { getDatabase, onValue, ref, push } from "firebase/database";
import { getAuth } from "firebase/auth";

import parseDatabaseData from "../../../utils/parseDatabaseData";
import styles from "./Chat.style";
import app from "../../../../firebase.config";
import FloatingButton from "../../../components/FloatingButton";
import MessageInputModal from "../../../components/modal/MessageInputModal";
import MessageCard from "../../../components/card/MessageCard";

function Chat({ navigation, route }) {
  const [messageList, setMessageList] = useState([]);
  const [isVisible, setVisible] = useState(false);

  const auth = getAuth(app);
  const db = getDatabase(app);
  useEffect(() => {
    onValue(
      ref(db, `rooms/${route.params.id}/${route.params.name}`),
      (snapshot) => {
        const data = snapshot.val();
        if (!data) {
          return;
        }
        const parsedData = parseDatabaseData(data);
        setMessageList(parsedData);
      }
    );
  }, []);

  function handleSend(message) {
    const userMail = auth.currentUser.email;
    const contentObject = {
      text: message,
      username: userMail.split("@")[0],
      date: new Date().toISOString(),
    };
    push(
      ref(db, `rooms/${route.params.id}/${route.params.name}`),
      contentObject
    );
  }
  function handleModal() {
    setVisible(!isVisible);
  }

  function renderChat({ item }) {
    return <MessageCard content={item} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title}>{route.params.name} odası kuruldu!</Text>
      </View>
      <FlatList data={messageList} renderItem={renderChat} />
      <MessageInputModal
        isVisible={isVisible}
        onClose={handleModal}
        onSend={handleSend}
      />
      <FloatingButton onPress={handleModal} />
    </SafeAreaView>
  );
}

export default Chat;
