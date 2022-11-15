import react from "react";


export const ThemeModeContext = react.createContext({mode: 0, setThemeMode: () => alert("error")});

const ThemeModeProvider = (props) => {
    const [ThemeMode, SetThemeMode] = react.useState(props.init);

    const HandleTheme = () => {SetThemeMode(v => 1 - v)}

    return(<ThemeModeContext.Provider value={{mode: ThemeMode, setMode: HandleTheme}}>
        {props.children}
    </ThemeModeContext.Provider>);
}

export default ThemeModeProvider;