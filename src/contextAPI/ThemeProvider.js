import React, { useState, useEffect } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../utilities/theme.css";
import { GlobalStyles } from "../utilities/global.css.js";

export const ThemeContext = React.createContext({
    theme: "",
    toggleTheme: () => { },
});

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(
        window.localStorage.getItem("theme") === null
            ? "light"
            : window.localStorage.getItem("theme")
    );

    const toggleTheme = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");

    };

    useEffect(() => {
        window.localStorage.setItem("theme", theme)
    }, [theme])




    return (
        <ThemeContext.Provider
            value={{
                theme: theme,
                toggleTheme: toggleTheme,
            }}
        >
            <StyledThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
                <GlobalStyles />
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
