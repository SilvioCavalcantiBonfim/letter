import react from "react";

// 1 - light
// 0 - dark
export const ThemeModeContext = react.createContext({});

const ThemeModeProvider = (props) => {
    const [ThemeProps, SetThemeProps] = react.useState(props.init);

    const HandleColor = (c) => {
        SetThemeProps( v => {return {...v,color: c}});
    }
    const HandleFontSize = (px) => {
        SetThemeProps( v => {return {...v,fontSize: px}});
    }
    const ToogleTheme = () => {
        SetThemeProps( v => {return {...v,theme: 1-v.theme}});
    }
    return(<ThemeModeContext.Provider value={{...ThemeProps, setColor: HandleColor, setFontSize: HandleFontSize, ToogleTheme: ToogleTheme}}>
        {props.children}
    </ThemeModeContext.Provider>);
}

export default ThemeModeProvider;