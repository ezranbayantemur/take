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
import {Status} from '@enums';
import {useDispatch} from 'react-redux';
import {setUser} from '@features';

const Login = () => {
  const [login, {data: loginResponse, isLoading, isError}] =
    usePostLoginMutation();
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();

  React.useEffect(() => {
    if (loginResponse && loginResponse.message === Status.SUCCESS) {
      AsyncStorage.setItem('session', JSON.stringify(loginResponse.data));
      dispatch(setUser(loginResponse.data));
      navigation.navigate(routes.DISCOVER);
    }
  }, [loginResponse, dispatch, navigation]);

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
