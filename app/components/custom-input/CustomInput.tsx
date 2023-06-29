import React, { useImperativeHandle, useRef } from 'react';
import { Text, TextInput, View } from 'react-native';
import { strings } from '../../constants';
import { colors } from '../../theme';
import customInputStyles from './CustomInputStyles';
import CustomTextInputType from './CustomInputTypes';

/**
 * CustomInput Function
 *
 * @param {CustomTextInputType} props - Props passed to the CustomInput component.
 * @param {React.Ref} ref - Forwarded ref to access the input element.
 * @returns {JSX.Element} - The custom input component.
 *
 * @description This function is a forwardRef component that creates a custom input element. It takes in props, which are the
 * properties passed to the CustomInput component, and a ref, which is a forwarded ref to access the input element.
 * The function returns a JSX element representing the custom input component.
 */
const CustomInput = React.forwardRef((props: CustomTextInputType, ref) => {
  const inputRef = useRef<TextInput>(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    },
  }));

  return (
    <>
      <View style={customInputStyles.inputContainer}>
        <TextInput
          ref={inputRef}
          secureTextEntry={props.name === strings.formInputNames.password}
          placeholder={props.name}
          returnKeyType={props.returnKeyType}
          autoCapitalize="none"
          placeholderTextColor={colors.grey}
          style={customInputStyles.inputs}
          onChangeText={props.onChangeText}
          onBlur={props.onBlur}
          onSubmitEditing={props.onSubmitEditing}
          defaultValue={props.defaultValue}
        />
      </View>
      {props.touched && props.error && (
        <Text style={customInputStyles.textWarning}>{props.error}</Text>
      )}
    </>
  );
});

export default CustomInput;
