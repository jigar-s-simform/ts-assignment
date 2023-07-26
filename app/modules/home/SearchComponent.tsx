import { MagnifyingGlass, XCircle } from 'phosphor-react-native';
import React from 'react';
import { TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';
import { Strings } from '../../constants';
import { Colors, moderateScale } from '../../theme';
import stylesheet from './HomeStyles';
import useHome, { FunctionType, UseHomeReturnType } from './useHome';

interface SearchComponentPropsType extends TextInputProps {
  search: FunctionType;
}

/**
 *
 * @param {SearchComponentPropsType} props
 * @returns {JSX.Element}
 */
const SearchComponent = (props: SearchComponentPropsType): JSX.Element => {
  const  { theme, inputRef, clearInput, searchText }: UseHomeReturnType =
    useHome();

  const styles = stylesheet(theme);

  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchContainerLeft}>
        <MagnifyingGlass
          size={moderateScale(24)}
          color={Colors[theme].themeCyan}
        />
        <TextInput
          ref={inputRef}
          style={styles.searchTextInput}
          placeholder={Strings.searchUser}
          onChangeText={props.search}
          placeholderTextColor={Colors[theme].black}
        />
      </View>
      {inputRef.current?.isFocused() && searchText && (
        <TouchableOpacity onPress={clearInput}>
          <XCircle size={moderateScale(24)} color={Colors[theme].themeCyan} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchComponent;
