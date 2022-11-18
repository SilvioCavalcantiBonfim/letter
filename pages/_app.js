import react from "react";
import { ThemeProvider } from "styled-components";
import NotificationProvider from "../src/components/notification/NotificationSystem";
import RegisterLetter from "../src/components/registerLetter";
import { CSSReset } from "../src/CSSReset";
import { M3Variable } from "../src/M3Variable";
import ThemeModeProvider, { ThemeModeContext } from "../src/ThemeControl";

const Theme = [{type: 'dark'}, {type: 'light'}];

const Root = ({ Component, pageProps }) => {

    const ModeContext = react.useContext(ThemeModeContext);
    return (<ThemeProvider theme={{color: ModeContext.color}}>
            <M3Variable/>
            <CSSReset />
            <RegisterLetter/>
            <Component {...pageProps} />
        </ThemeProvider>);
}

const _App = (props) => {
    return(<ThemeModeProvider init={{color: "lavender"}}>
        <NotificationProvider>
        <Root {...props}/>
        </NotificationProvider>
    </ThemeModeProvider>);
}

export default _App;