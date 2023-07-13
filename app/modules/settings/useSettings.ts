import { Alert, Linking } from "react-native";
import { NavigationRoutes, Strings } from "../../constants";
import { logout, persistor, useAppDispatch } from "../../redux";
import { navigateWithReplace } from "../../utils";

const useSettings = () => {

    const dispatch = useAppDispatch()

    const handleOpenUrl = async (): Promise<void> => {
        try {
            const canOpen = await Linking.canOpenURL(Strings.googleUrl);
            if (canOpen) Linking.openURL(Strings.googleUrl);
        } catch (e) {
            Alert.alert(Strings.featureUnavaible)
        }
    }

    const handleLogout = () => {
        dispatch(logout());
        persistor.purge();
        navigateWithReplace(NavigationRoutes.LoginScreen);
    }

    return { handleOpenUrl, handleLogout };
}

export default useSettings;