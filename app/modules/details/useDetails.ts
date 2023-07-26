import { ColorSchemeName, Linking, useColorScheme } from 'react-native';
import { StorageConstants, Strings } from '../../constants';
import { useMMKVString } from 'react-native-mmkv';
import { ThemeType, UserSchemaType, mmkvStorage } from '../../services';
import { Images } from '../../assets';

export interface UseDetailsReturnType {
  theme: ThemeType
  handleSendSms: () => Promise<void>
  imageUrl: number | {uri: string}
}

const useDetails = (userDetails: UserSchemaType): UseDetailsReturnType => {
  let imageUrl: number | {uri: string} = Images.defaultImg;
  if (userDetails && typeof userDetails.avatar === 'string')
    imageUrl = { uri: userDetails.avatar };

  const [mmkvTheme] = useMMKVString(
    StorageConstants.themeStorageKey,
    mmkvStorage,
  );
  const appearance: ColorSchemeName = useColorScheme();
  
  const handleSendSms = async (): Promise<void> => {
    const res: boolean = await Linking.canOpenURL(Strings.sendSms);
    if (res) Linking.openURL(Strings.sendSms);
  };

  return {
    handleSendSms,
    theme: (mmkvTheme ?? appearance) as ThemeType,
    imageUrl
  };
};

export default useDetails;
