import React, { createContext, useContext } from "react";

export enum themeEnum {
    default = '',
    light = 'light',
    dark = 'dark'
}

export enum fontSizeEnum {
    default = '',
    small = 'small',
    medium = 'medium',
    large = 'large'
}


// create tuple for setting state type
type ThemeContextTuple = [themeEnum, React.Dispatch<React.SetStateAction<themeEnum>>]
type FontSizeContextTuple = [fontSizeEnum, React.Dispatch<React.SetStateAction<fontSizeEnum>>]


export const ThemeContext = createContext<ThemeContextTuple>(
    [themeEnum.default, () => { }]  //set default value for error handling
);
// create costume hook for error handling and clean code:
export const useTheme = () => {
    const context = useContext(ThemeContext);
    // check for default value:
    if (context[0] === '') throw new Error("useTheme must be used within a ThemeContext");
    return context;
}

export const FontSizeContext = createContext<FontSizeContextTuple>(
    [fontSizeEnum.default, () => { }]  //set default value for error handling
);
export const useFontSize = () => {
    const context = useContext(FontSizeContext);
    if (context[0] === '') throw new Error('useFontSize must be used within a FontSizeContext');
    return context;
}
