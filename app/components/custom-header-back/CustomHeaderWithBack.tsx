import { ArrowLeft } from 'phosphor-react-native';
import { useContext } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { Strings } from '../../constants';
import { ThemeContext } from '../../context';
import { Colors, moderateScale } from '../../theme';
import { navigateBack } from '../../utils';
import stylesheet from './CustomHeaderStyles';

interface CustomHeaderTypes {
  title: string;
}

const CustomHeaderWithBack = ({ title }: CustomHeaderTypes) => {
  const { theme } = useContext(ThemeContext);
  const styles = stylesheet(theme);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.leftContent} onPress={navigateBack}>
        <ArrowLeft
          size={moderateScale(25)}
          weight="fill"
          color={Colors[theme].black}
        />
      </TouchableOpacity>
      <View style={styles.centerContent}>
        <Text numberOfLines={Strings.customHeaderNumberOfLines} ellipsizeMode="tail" style={styles.textStyles}>
          {title}
        </Text>
      </View>
      <View style={styles.leftContent} />
    </SafeAreaView>
  );
};

export default CustomHeaderWithBack;
