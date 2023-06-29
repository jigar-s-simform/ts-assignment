import { TextInputProps } from 'react-native';

export default interface CustomTextInputType extends TextInputProps {
  error: string | boolean | undefined;
  name: string;
  touched: boolean | undefined;
}
