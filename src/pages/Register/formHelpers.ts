import * as Yup from 'yup';

export interface RegisterFormValuesType {
  email: string;
  password: string;
  repassword: string;
}

export const initialRegisterFormValues: RegisterFormValuesType = {
  email: '',
  password: '',
  repassword: '',
};

export const registerValidationSchema = Yup.object().shape({
  email: Yup.string().email('Geçersiz e-posta').required('Bu alan zorunludur'),
  password: Yup.string().required('Bu alan zorunludur'),
  repassword: Yup.string()
    .required('Bu alan zorunludur')
    .oneOf([Yup.ref('password')], 'Parolalar uyuşmuyor'),
});
