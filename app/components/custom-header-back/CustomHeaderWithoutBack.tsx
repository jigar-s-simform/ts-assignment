import { SafeAreaView, Text, View } from 'react-native';
import stylesheet from './CustomHeaderStyles';
import { useContext } from 'react';
import { ThemeContext, ThemeType } from '../../context';

interface CustomHeaderTypes {
  title: string;
}

const CustomHeaderWithoutBack = ({ title }: CustomHeaderTypes) => {
  const { theme } = useContext(ThemeContext);
  const styles = stylesheet(theme as ThemeType)
   
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.leftContent} />
      <View style={styles.centerContent}>
        <Text style={styles.textStyles}>{title}</Text>
      </View>
      <View style={styles.leftContent} />
    </SafeAreaView>
  );
};

export default CustomHeaderWithoutBack;
