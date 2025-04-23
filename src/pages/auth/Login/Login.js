import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, View } from "react-native";
import { Formik } from "formik";
import Button from "../../../components/Button";
import { auth } from "../../../../firebase.config";

import styles from "./Login.style";
import Input from "../../../components/Input/Input";

const initialFormValues = {
  email: "",
  password: "",
};

const Login = () => {
  const [loading, setLoading] = useState(false);

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
          {({ handleChange, handleSubmit, values }) => (
            <>
              <Input
                placeholder={"Email"}
                icon={"mail"}
                onTextChange={handleChange("email")}
                value={values.email}
              />
              <Input
                placeholder={"Password"}
                icon={"key"}
                onTextChange={handleChange("password")}
                value={values.password}
              />
              <Button text="Giriş yap" onPress={handleSubmit} />
            </>
          )}
        </Formik>
        <Button text="Kayıt ol" />
      </View>
    </SafeAreaView>
  );
};
export default Login;
