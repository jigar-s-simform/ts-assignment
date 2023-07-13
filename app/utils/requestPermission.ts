import { Permission, request } from "react-native-permissions";

export const requestPermission = async (permission: Permission) => {
    const answer = await request(permission);
    return answer;
}
