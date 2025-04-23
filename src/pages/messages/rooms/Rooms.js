import React from "react";
import { SafeAreaView, Text } from "react-native";
import app from "../../../../firebase.config";
import { getAuth, signOut } from "firebase/auth";

import styles from "./Rooms.style";
import Button from "../../../components/Button";

function Rooms() {
  const auth = getAuth(app);
  return (
    <SafeAreaView style={styles.container}>
      <Text>Rooms Page</Text>
      <Button
        onPress={() => {
          signOut(auth);
        }}
        text={"Signout"}
      ></Button>
    </SafeAreaView>
  );
}
export default Rooms;
