import React, { createContext, useEffect, useState } from 'react';
import './ThemeContext.css';

export const ToggleThemeContext = createContext();
const ThemeContext = ({ children }) => {
    const [theme, setTheme] = useState('dark');
    useEffect(() => {
        document.body.className = theme? 'light' : 'App-header';
    }, [theme]);

    const themeInfo = { theme, setTheme };
    return (
        <ToggleThemeContext.Provider value={themeInfo}>
            {children}
        </ToggleThemeContext.Provider>
    );
};

export default ThemeContext;