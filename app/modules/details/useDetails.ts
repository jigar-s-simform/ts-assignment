import { Linking } from 'react-native';
import { Strings } from '../../constants';

const useDetails = () => {
  const handleSendSms = async () => {
    const res: boolean = await Linking.canOpenURL(Strings.sendSms);
    if (res) Linking.openURL(Strings.sendSms);
  };
  return {handleSendSms};
};

export default useDetails;
