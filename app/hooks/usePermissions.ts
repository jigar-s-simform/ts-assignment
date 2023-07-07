import { Permission, check } from 'react-native-permissions';

export const usePermissionStatus = async(permissionQueried:Permission) => {
    const result = await check(permissionQueried)
    return result;       
}



