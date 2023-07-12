import { useState } from "react"
import { NavigationRoutes } from "../../constants";
import { navigateWithPush } from "../../utils";

const useDrawer = () => {
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
