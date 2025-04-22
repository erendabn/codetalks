import React from "react";
import { SafeAreaView, Text, TextInput, View } from "react-native";
import { Formik } from "formik";
import Button from "../../../components/Button";

import styles from "./Login.style";
import Input from "../../../components/Input/Input";

const initialFormValues = {
  email: "",
  password: "",
};

const Login = () => {
  function handleLogin(values) {
    console.log(values);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header_container}>
        <Text style={styles.header}>CodeTalks</Text>
      </View>
      <View style={styles.inner_container}>
        <Formik initialValues={initialFormValues} onSubmit={handleLogin}>
          <>
            <Input placeholder={"Email"} icon={"mail"} />
            <Input placeholder={"Password"} icon={"key"} />
            <Button text="Giriş yap" />
          </>
        </Formik>
        <Button text="Kayıt ol" />
      </View>
    </SafeAreaView>
  );
};
export default Login;
