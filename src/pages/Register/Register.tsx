import {SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';
import routes from '@route';
import {Button, Input} from '@components';

import {
  initialRegisterFormValues,
  registerValidationSchema,
  type RegisterFormValuesType,
} from './formHelpers';
import styles from './Register.style';

const Register = () => {
  const navigation = useNavigation<any>();
  const handleFormSubmit = ({email, password}: RegisterFormValuesType) => {
    console.log(email, password);
  };

  const handleNavigateRegister = () => {
    navigation.navigate(routes.LOGIN);
  };

  return (
    <SafeAreaView testID="register_page" style={styles.outer_container}>
      <View style={styles.container}>
        <View style={styles.logo_container}>
          <Text style={styles.logo_text}>take</Text>
        </View>
        <Formik
          validationSchema={registerValidationSchema}
          initialValues={initialRegisterFormValues}
          onSubmit={handleFormSubmit}>
          {({handleChange, handleSubmit, errors}) => (
            <>
              <Input
                testID="register_email"
                placeholder="E-posta adresinizi girin..."
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={handleChange('email')}
                errorMessage={errors.email}
              />
              <Input
                testID="register_password"
                placeholder="Parolanızı girin..."
                secureTextEntry
                textContentType="oneTimeCode"
                errorMessage={errors.password}
                onChangeText={handleChange('password')}
              />
              <Input
                testID="register_repassword"
                placeholder="Parolanızı tekrar girin..."
                secureTextEntry
                textContentType="oneTimeCode"
                errorMessage={errors.repassword}
                onChangeText={handleChange('repassword')}
              />
              <View style={styles.button_container}>
                <Button
                  testID="register_sign"
                  text="Kayıt Ol"
                  onPress={handleSubmit}
                />
                <Button
                  testID="register_login_navigate"
                  text="Geri"
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

export default Register;
