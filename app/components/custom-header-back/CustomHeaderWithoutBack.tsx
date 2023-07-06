import { SafeAreaView, Text, View } from 'react-native';
import styles from './CustomHeaderStyles';

interface CustomHeaderTypes {
  title: string;
}

const CustomHeaderWithoutBack = ({ title }: CustomHeaderTypes): JSX.Element => {
    
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
