import {SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';
import routes from '@route';
import {Button, Input} from '@components';

import {
  initialLoginFormValues,
  loginValidationSchema,
  type LoginFormValuesType,
} from './formHelpers';
import styles from './Login.style';

const Login = () => {
  const navigation = useNavigation<any>();
  const handleFormSubmit = ({email, password}: LoginFormValuesType) => {
    console.log(email, password);
  };

  const handleNavigateRegister = () => {
    navigation.navigate(routes.REGISTER);
  };

  return (
    <SafeAreaView testID="login_page" style={styles.outer_container}>
      <View style={styles.container}>
        <View style={styles.logo_container}>
          <Text style={styles.logo_text}>take</Text>
        </View>
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={initialLoginFormValues}
          onSubmit={handleFormSubmit}>
          {({handleChange, handleSubmit, errors}) => (
            <>
              <Input
                testID="login_email"
                placeholder="E-posta adresinizi girin..."
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={handleChange('email')}
                errorMessage={errors.email}
              />
              <Input
                testID="login_password"
                placeholder="Parolanızı girin..."
                secureTextEntry
                errorMessage={errors.password}
                onChangeText={handleChange('password')}
              />
              <View style={styles.button_container}>
                <Button
                  testID="login_sign"
                  text="Giriş Yap"
                  onPress={handleSubmit}
                />
                <Button
                  testID="login_register_navigate"
                  text="Kayıt Ol"
                  type="outline"
                  onPress={handleNavigateRegister}
                />
              </View>
            </>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
};

export default Login;
