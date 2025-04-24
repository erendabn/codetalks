import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { onAuthStateChanged, getAuth, signOut } from "firebase/auth";
import FlashMessage from "react-native-flash-message";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Pressable } from "react-native";

import app from "../firebase.config";

import Login from "./pages/auth/Login";
import Sign from "./pages/auth/Sign";
import Rooms from "./pages/messages/rooms";
import colors from "./styles/colors";
import Chat from "./pages/messages/chat";

const Stack = createNativeStackNavigator();

export default function App() {
  const [userSession, setUserSession] = useState(false);

  const auth = getAuth(app);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUserSession(!!user);
    });
  }, []);

  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="SignPage" component={Sign} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      {!userSession ? (
        <AuthStack />
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerRight: () => {
              return (
                <Pressable
                  onPress={() => {
                    signOut(auth);
                  }}
                >
                  <Icon name="logout" size={30} color={colors.orange800} />
                </Pressable>
              );
            },
            headerTintColor: colors.orange800,
          }}
        >
          <Stack.Screen
            name="RoomsPage"
            component={Rooms}
            options={{ title: "Odalar" }}
          />
          <Stack.Screen
            name="ChatPage"
            component={Chat}
            options={({ route }) => ({
              title: route.params.name,
            })}
          />
        </Stack.Navigator>
      )}
      <FlashMessage position="top" />
    </NavigationContainer>
  );
}
