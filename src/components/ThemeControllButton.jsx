import { mdiWeatherNight, mdiWhiteBalanceSunny } from "@mdi/js";
import Icon from "@mdi/react";
import { useEffect } from "react";
import { themeChange } from "theme-change";

function ThemeControllButton() {
    useEffect(() => {
        themeChange(false);
    }, []);

    return (
        <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" className="theme-controller" value={"dark"} />

            {/* sun icon */}
            <Icon
                className="swap-off h-10 w-10 fill-current"
                path={mdiWhiteBalanceSunny}
                size={1}
            />

            {/* moon icon */}
            <Icon className="swap-on h-10 w-10 fill-current" path={mdiWeatherNight} size={1} />
        </label>
    );
}

export default ThemeControllButton;
