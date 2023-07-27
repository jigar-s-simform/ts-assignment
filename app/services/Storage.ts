import { MMKV } from 'react-native-mmkv';
import { StorageConstants } from '../constants';

export type ThemeType = 'light' | 'dark';

export type UseMmkvReturnType = [value: string | undefined, setValue: (value: string | ((current: string | undefined) => string | undefined) | undefined) => void]

export const mmkvStorage: MMKV = new MMKV({
  id: StorageConstants.id,
  encryptionKey: StorageConstants.encryptionKey,
});
