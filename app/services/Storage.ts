import { MMKV } from 'react-native-mmkv';
import { StorageConstants } from '../constants';

export type ThemeType = 'light' | 'dark';

export const mmkvStorage: MMKV = new MMKV({
  id: StorageConstants.id,
  encryptionKey: StorageConstants.encryptionKey,
});
