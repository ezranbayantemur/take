import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';
import routes from '@route';
import {Button, Input} from '@components';

import {
  initialRegisterFormValues,
  registerValidationSchema,
} from './formHelpers';
import styles from './Register.style';
import {usePostRegisterMutation} from '../../redux/api';
import {Status} from '@enums';

const Register = () => {
  const navigation = useNavigation<any>();
  const [register, {data: registerResponse, isLoading, isError}] =
    usePostRegisterMutation();

  React.useEffect(() => {
    if (registerResponse && registerResponse.message === Status.SUCCESS) {
      navigation.navigate(routes.LOGIN);
    }
  }, [registerResponse, navigation]);

  const handleNavigateRegister = React.useCallback(() => {
    navigation.navigate(routes.LOGIN);
  }, [navigation]);

  return (
    <SafeAreaView testID="register_page" style={styles.outer_container}>
      <View style={styles.container}>
        <View style={styles.logo_container}>
          <Text style={styles.logo_text}>take!</Text>
        </View>
        <Formik
          validationSchema={registerValidationSchema}
          initialValues={initialRegisterFormValues}
          onSubmit={register}>
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
                blurOnSubmit={false}
                onChangeText={handleChange('password')}
              />
              <Input
                testID="register_repassword"
                placeholder="Parolanızı tekrar girin..."
                secureTextEntry
                textContentType="oneTimeCode"
                errorMessage={errors.repassword}
                blurOnSubmit={false}
                onChangeText={handleChange('repassword')}
              />
              <View style={styles.button_container}>
                {isError && (
                  <Text
                    testID="register_error_message"
                    style={styles.error_message}>
                    Kayıt oluşturulurken bir hatayla karşılaşıldı
                  </Text>
                )}
                <Button
                  testID="register_sign"
                  text="Kayıt Ol"
                  loading={isLoading}
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
