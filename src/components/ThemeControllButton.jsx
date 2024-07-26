"use client";

import { mdiWeatherNight, mdiWhiteBalanceSunny } from "@mdi/js";
import Icon from "@mdi/react";
import { useEffect, useState } from "react";
import { themeChange } from "theme-change";

function ThemeControllButton() {
    const initialTheme = window.localStorage.getItem("theme") || "light";
    const [theme, setTheme] = useState(initialTheme);

    const handleThemeChange = () => {
        const currentTheme = window.localStorage.getItem("theme");
        currentTheme === "dark" ? setTheme("dark") : setTheme("light");
    };

    useEffect(() => {
        themeChange(false);
    }, []);

    return (
        <>
            <button data-toggle-theme="dark,light" onClick={handleThemeChange} className="">
                {theme === "dark" ? (
                    <Icon path={mdiWeatherNight} size={1} />
                ) : (
                    <Icon path={mdiWhiteBalanceSunny} size={1} />
                )}
            </button>
        </>
    );
}

export default ThemeControllButton;
