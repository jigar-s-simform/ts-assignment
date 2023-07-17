import { MagnifyingGlass, XCircle } from 'phosphor-react-native';
import React, { useContext, useRef } from 'react';
import { TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';
import { Strings, ThemeValues } from '../../constants';
import { ThemeContext, ThemeType } from '../../context';
import { homeSelector, searchUser, useAppDispatch, useAppSelector } from '../../redux';
import { Colors, moderateScale } from '../../theme';
import stylesheet from './HomeStyles';
import { FunctionType } from './useHome';

interface SearchComponentPropsType extends TextInputProps {
  search: FunctionType;
}

/**
 * 
 * @param {SearchComponentPropsType} props
 * @returns {JSX.Element}
 */
const SearchComponent = (props: SearchComponentPropsType): JSX.Element => {
  const inputRef = useRef<TextInput>(null);
  const dispatch = useAppDispatch();
  const { searchText } = useAppSelector(homeSelector);
  const { theme } = useContext(ThemeContext);

  const styles = stylesheet(theme as ThemeType);

  const clearInput = () => {
    inputRef.current?.clear();
    dispatch(searchUser(Strings.emptyString));
    inputRef.current?.blur();
  };

  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchContainerLeft}>
        <MagnifyingGlass
          size={moderateScale(24)}
          color={Colors[theme ?? ThemeValues.light]?.themeCyan} 
        />
        <TextInput
          ref={inputRef}
          placeholder={Strings.searchUser}
          onChangeText={props.search}
          placeholderTextColor={Colors[theme ?? ThemeValues.light]?.black}
        />
      </View>
      {inputRef.current?.isFocused() && searchText && (
        <TouchableOpacity onPress={clearInput}>
          <XCircle size={moderateScale(24)} color={Colors[theme ?? ThemeValues.light]?.themeCyan} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchComponent;
