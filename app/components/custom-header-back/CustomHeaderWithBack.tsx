import { ArrowLeft } from 'phosphor-react-native';
import { useContext } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { ThemeValues } from '../../constants';
import { ThemeContext, ThemeType } from '../../context';
import { Colors, moderateScale } from '../../theme';
import { navigateBack } from '../../utils';
import stylesheet from './CustomHeaderStyles';

interface CustomHeaderTypes {
  title: string;
}

const CustomHeaderWithBack = ({title}: CustomHeaderTypes) => {
  const {theme} = useContext(ThemeContext);
  const styles = stylesheet(theme as ThemeType);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.leftContent} onPress={navigateBack}>
        <ArrowLeft
          size={moderateScale(25)}
          weight="fill"
          color={Colors[theme || ThemeValues.light]?.black}
        />
      </TouchableOpacity>
      <View style={styles.centerContent}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.textStyles}>
          {title}
        </Text>
      </View>
      <View style={styles.leftContent} />
    </SafeAreaView>
  );
};

export default CustomHeaderWithBack;
