import AsyncStorage from '@react-native-async-storage/async-storage';
import { AsyncLoginStatus, AsyncUpdateStatus, Strings } from '../constants';
import { UserSchemaType } from '../services';

export const getLoginStatusFromAsyncStorage = async (
  user: Partial<UserSchemaType>,
): Promise<string> => {
  try {
    const usersInStorageResponse: string | null = await AsyncStorage.getItem(
      Strings.userDataKey,
    );

    if (usersInStorageResponse) {
      const usersInStorage: Partial<UserSchemaType>[] = JSON.parse(
        usersInStorageResponse,
      );
      const userIndex = usersInStorage.findIndex(
        userStored => userStored.email === user.email,
      );

      if (userIndex === -1) {
        return AsyncLoginStatus.userNotFound;
      } else {
        if (usersInStorage[userIndex].password === user.password)
          return AsyncLoginStatus.success;
        else return AsyncLoginStatus.invalidPassword;
      }
    }

    return AsyncLoginStatus.userNotFound;
  } catch (e) {
    return AsyncLoginStatus.saveError;
  }
};

export const updatePassword = async (
  user: UserSchemaType,
  newPassword: string,
): Promise<string> => {
  const usersInStorageResponse: string | null = await AsyncStorage.getItem(
    Strings.userDataKey,
  );
  try {
    if (usersInStorageResponse) {
      const usersInStorage: UserSchemaType[] = JSON.parse(
        usersInStorageResponse,
      );
      const userIndex = usersInStorage.findIndex(
        userStored => userStored.email === user.email,
      );

      if (userIndex !== -1) {
        usersInStorage[userIndex] = {
          ...usersInStorage[userIndex],
          password: newPassword,
        };
        await AsyncStorage.setItem(
          Strings.userDataKey,
          JSON.stringify(usersInStorage),
        );
      }

      return AsyncUpdateStatus.success;
    } else return AsyncUpdateStatus.error;
  } catch (e) {
    return AsyncUpdateStatus.error;
  }
};

export const saveToAsync = async (user: UserSchemaType): Promise<void> => {
  const usersInStorageResponse: string | null = await AsyncStorage.getItem(
    Strings.userDataKey,
  );
  if (usersInStorageResponse) {
    const usersInStorage: UserSchemaType[] = JSON.parse(usersInStorageResponse);
    usersInStorage.push(user);
    await AsyncStorage.setItem(
      Strings.userDataKey,
      JSON.stringify(usersInStorage),
    );
  }
};
