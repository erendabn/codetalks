import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, Text } from "react-native";
import { getDatabase, push, ref, onValue, child } from "firebase/database";

import app from "../../../../firebase.config";

import styles from "./Rooms.style";
import FloatingButton from "../../../components/FloatingButton/FloatingButton";
import RoomInputModal from "../../../components/modal/RoomInputModal/RoomInputModal";
import parseDatabaseData from "../../../utils/parseDatabaseData";
import RoomCard from "../../../components/card/RoomCard/RoomCard";

function Rooms({ navigation }) {
  const [roomList, setRoomList] = useState([]);
  const [isVisible, setVisible] = useState(false);
  const db = getDatabase(app);
  useEffect(() => {
    onValue(ref(db, "rooms/"), (snapshot) => {
      const data = snapshot.val();
      if (!data) {
        return;
      }
      const parsedData = parseDatabaseData(data);
      setRoomList(parsedData);
    });
  }, []);

  function handleModal() {
    setVisible(!isVisible);
  }

  function renderRooms({ item }) {
    return (
      <RoomCard
        room={item}
        onPress={() => handleNavigation(item.id, item.name)}
      />
    );
  }

  function handleSend(room) {
    push(ref(db, "rooms/"), {
      name: room,
      date: new Date().toISOString(),
    });
  }

  function handleNavigation(id, name) {
    navigation.navigate("ChatPage", {
      id: id,
      name: name,
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={roomList} renderItem={renderRooms} numColumns={2} />
      <RoomInputModal
        isVisible={isVisible}
        onClose={handleModal}
        onSend={handleSend}
      />
      <FloatingButton onPress={handleModal} />
    </SafeAreaView>
  );
}
export default Rooms;
