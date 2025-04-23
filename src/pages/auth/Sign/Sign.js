import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Formik } from "formik";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { showMessage } from "react-native-flash-message";

import app from "../../../../firebase.config.js";

import authErrorMessageParser from "../../../utils/authErrorMessageParser.js";
import Button from "../../../components/Button";
import Input from "../../../components/Input/Input";
import styles from "./Sign.style.js";

const initialFormValues = {
  email: "",
  password: "",
  repassword: "",
};

const Sign = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const auth = getAuth(app);

  async function handleLogin(formValues) {
    if (formValues.password != formValues.repassword) {
      console.log("Şifreler aynı değil");
      return;
    }
    try {
      setLoading(true);
      await createUserWithEmailAndPassword(
        auth,
        formValues.email,
        formValues.password
      );
      showMessage({
        message: "Kayıt Yapıldı",
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
                placeholder={"E-Mailinizi giriniz"}
                icon={"mail"}
                onTextChange={handleChange("email")}
                value={values.email}
              />
              <Input
                placeholder={"Şifrenizi giriniz"}
                icon={"key"}
                onTextChange={handleChange("password")}
                value={values.password}
                isSecure
              />
              <Input
                placeholder={"Şifrenizi tekrar giriniz"}
                icon={"key"}
                onTextChange={handleChange("repassword")}
                value={values.repassword}
                isSecure
              />
              <Button
                text="Kayıt ol"
                onPress={handleSubmit}
                loading={loading}
              />
            </>
          )}
        </Formik>
        <Button
          text="Geri"
          theme="secondary"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    </SafeAreaView>
  );
};
export default Sign;
