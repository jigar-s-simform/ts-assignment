import {useEffect, useState} from 'react';
import {
  Permission,
  PermissionStatus,
  RESULTS,
  check,
} from 'react-native-permissions';

export const usePermissionStatus = (permissionQueried: Permission) => {
  const [permissionStatus, setPermissionStatus] = useState<PermissionStatus>(
    RESULTS.UNAVAILABLE,
  );

  useEffect(() => {
    const checkPermission = async () => {
      const result = await check(permissionQueried);
      setPermissionStatus(result);
    };
    checkPermission();
  }, [permissionStatus]);
  return permissionStatus;
};
