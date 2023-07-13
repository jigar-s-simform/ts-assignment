import { ArrowLeft } from 'phosphor-react-native';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { moderateScale } from '../../theme';
import { navigateBack } from '../../utils';
import styles from './CustomHeaderStyles';

interface CustomHeaderTypes {
  title: string;
}

const CustomHeaderWithBack = ({ title }: CustomHeaderTypes): JSX.Element => {

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.leftContent} onPress={navigateBack}>
        <ArrowLeft size={moderateScale(25)} weight="fill" />
      </TouchableOpacity>
      <View style={styles.centerContent}>
        <Text style={styles.textStyles}>{title}</Text>
      </View>
      <View style={styles.leftContent} />
    </SafeAreaView>
  );
};

export default CustomHeaderWithBack;
