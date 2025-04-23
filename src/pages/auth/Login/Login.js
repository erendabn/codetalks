import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Formik } from "formik";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { showMessage } from "react-native-flash-message";

import app from "../../../../firebase.config.js";

import authErrorMessageParser from "../../../utils/authErrorMessageParser.js";
import Button from "../../../components/Button";
import Input from "../../../components/Input/Input";
import styles from "./Login.style";

const initialFormValues = {
  email: "",
  password: "",
};

const Login = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const auth = getAuth(app);

  async function handleLogin(formValues) {
    try {
      setLoading(true);
      await signInWithEmailAndPassword(
        auth,
        formValues.email,
        formValues.password
      );
      showMessage({
        message: "Giriş Yapıldı",
        type: "success",
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      showMessage({
        message: authErrorMessageParser(error.code),
        type: "danger",
      });
    }
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
                isSecure
              />
              <Button
                text="Giriş yap"
                onPress={handleSubmit}
                loading={loading}
              />
            </>
          )}
        </Formik>
        <Button
          text="Kayıt ol"
          theme="secondary"
          onPress={() => {
            navigation.navigate("SignPage");
          }}
        />
      </View>
    </SafeAreaView>
  );
};
export default Login;
