import { useContext } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { ThemeContext } from '../../context';
import stylesheet from './CustomHeaderStyles';

interface CustomHeaderTypes {
  title: string;
}

const CustomHeaderWithoutBack = ({ title }: CustomHeaderTypes) => {
  const { theme } = useContext(ThemeContext);
  const styles = stylesheet(theme)
   
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
