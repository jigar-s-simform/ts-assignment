import { Permission, check, PermissionStatus } from 'react-native-permissions';

export const usePermissionStatus = async (
  permissionQueried: Permission,
): Promise<PermissionStatus> => {
  const result = await check(permissionQueried);
  return result;
};
