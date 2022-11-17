import react from "react";


export const ThemeModeContext = react.createContext({color: "", setThemeMode: () => alert("error")});

const ThemeModeProvider = (props) => {
    const [ThemeProps, SetThemeProps] = react.useState(props.init);

    const HandleColor = (c) => {
        SetThemeProps({color: c});
    }

    return(<ThemeModeContext.Provider value={{color:ThemeProps.color, setColor: HandleColor}}>
        {props.children}
    </ThemeModeContext.Provider>);
}

export default ThemeModeProvider;