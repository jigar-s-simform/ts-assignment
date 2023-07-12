import { MagnifyingGlass, XCircle } from 'phosphor-react-native';
import React, { useRef } from 'react';
import { TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';
import { Strings } from '../../constants';
import { homeSelector, searchUser, useAppDispatch, useAppSelector } from '../../redux';
import { colors, moderateScale } from '../../theme';
import styles from './HomeStyles';
import { FunctionType } from './useHome';

interface SearchComponentPropsType extends TextInputProps {
  search: FunctionType;
}

/**
 * 
 * @param {SearchComponentPropsType} props
 * @returns {JSX.Element}
 */
const SearchComponent = (props: SearchComponentPropsType) => {
  const inputRef = useRef<TextInput>(null);
  const dispatch = useAppDispatch();
  const {searchText} = useAppSelector(homeSelector)

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
          color={colors.themeBlueDark}
        />
        <TextInput
          ref={inputRef}
          placeholder={Strings.searchUser}
          onChangeText={props.search}
          placeholderTextColor={colors.themeBlueDark}
        />
      </View>
      {inputRef.current?.isFocused() && searchText && (
        <TouchableOpacity onPress={clearInput}>
          <XCircle size={moderateScale(24)} color={colors.themeBlueDark} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchComponent;
