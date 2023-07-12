import { useState } from "react"
import { NavigationRoutes } from "../../constants";
import { navigateWithPush } from "../../utils";

interface UseDrawerReturnType {
    onPressHandler : (route: NavigationRoutes) => void
}

const useDrawer = (): UseDrawerReturnType => {
    const [focused, setFocused] = useState<NavigationRoutes>();

    const onPressHandler = (route: NavigationRoutes) => {
        navigateWithPush(route);
        setFocused(route);
    }

    return {
        onPressHandler
    }
}

export default useDrawer;
