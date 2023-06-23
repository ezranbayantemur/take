import * as Yup from 'yup';

export interface LoginFormValuesType {
  email: string;
  password: string;
}

export const initialLoginFormValues: LoginFormValuesType = {
  email: '',
  password: '',
};

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email('Geçersiz e-posta').required('Bu alan zorunludur'),
  password: Yup.string().required('Bu alan zorunludur'),
});
