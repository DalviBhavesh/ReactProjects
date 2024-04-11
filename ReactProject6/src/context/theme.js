import React from 'react'

//creating context with initialized data
export const ThemeContext = React.createContext(
    {
        mode: "light",
        darkTheme: ()=>{},
        lightTheme: ()=>{},
    }
)

//creating provider
export const ThemeProvider = ThemeContext.Provider;

//custom hook to useContext
export default function useTheme(){
    return React.useContext(ThemeContext);
} 