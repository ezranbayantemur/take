import ErrorPage from './ErrorPage';
import type {Meta, StoryObj} from '@storybook/react-native';
import type {ErrorPageProps} from './types';

const ErrorPageMeta: Meta<ErrorPageProps> = {
  title: 'ErrorPage',
  component: ErrorPage,
};

export default ErrorPageMeta;

export const Basic: StoryObj<ErrorPageProps> = {};
