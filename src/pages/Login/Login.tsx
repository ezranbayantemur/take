import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';
import routes from '@route';
import {Button, Input} from '@components';
import {usePostLoginMutation} from '../../redux/api';

import {initialLoginFormValues, loginValidationSchema} from './formHelpers';
import styles from './Login.style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Status, StorageKeys} from '@enums';
import {useDispatch} from 'react-redux';
import {setUserSession} from '@features';
import {AppDispatch} from 'src/redux/store';

const Login = () => {
  const [login, {data: loginResponse, isLoading, isError}] =
    usePostLoginMutation();
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<any>();

  const handleSetCredentials = React.useCallback(async () => {
    if (loginResponse && loginResponse.message === Status.SUCCESS) {
      await AsyncStorage.setItem(
        StorageKeys.SESSION,
        JSON.stringify(loginResponse.data),
      );
      dispatch(setUserSession(loginResponse.data));
    }
  }, [loginResponse, dispatch]);

  React.useEffect(() => {
    handleSetCredentials();
  }, [handleSetCredentials]);

  const handleNavigateRegister = React.useCallback(() => {
    navigation.navigate(routes.REGISTER);
  }, [navigation]);

  return (
    <SafeAreaView testID="login_page" style={styles.outer_container}>
      <View style={styles.container}>
        <View style={styles.logo_container}>
          <Text style={styles.logo_text}>take</Text>
        </View>
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={initialLoginFormValues}
          onSubmit={login}>
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
                {isError && (
                  <Text
                    testID="register_error_message"
                    style={styles.error_message}>
                    Giriş olurken bir sorunla karşılaşıldı
                  </Text>
                )}
                <Button
                  testID="login_sign"
                  text="Giriş Yap"
                  loading={isLoading}
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
