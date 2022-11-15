import react from "react";
import { ThemeProvider } from "styled-components";
import { CSSReset } from "../src/CSSReset";
import { M3Variable } from "../src/M3Variable";
import ThemeModeProvider, { ThemeModeContext } from "../src/ThemeControl";

const Theme = [{type: 'dark'}, {type: 'light'}];

const Root = ({ Component, pageProps }) => {

    const ModeContext = react.useContext(ThemeModeContext);
    return (<ThemeProvider theme={Theme[ModeContext.mode]}>
            <M3Variable/>
            <CSSReset />
            <Component {...pageProps} />
        </ThemeProvider>);
}

const _App = (props) => {
    return(<ThemeModeProvider init={1}>
        <Root {...props}/>
    </ThemeModeProvider>);
}

export default _App;