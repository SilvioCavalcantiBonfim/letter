import react from "react";
import { ThemeProvider } from "styled-components";
import NotificationProvider from "../src/components/notification/NotificationSystem";
import RegisterLetter from "../src/components/registerLetter";
import { CSSReset } from "../src/CSSReset";
import { Variables } from "../src/CSS/variables";
import ThemeModeProvider, { ThemeModeContext } from "../src/ThemeControl";
import { Animations } from "../src/CSS/animations";

const Theme = [{type: 'dark'}, {type: 'light'}];

const Root = ({ Component, pageProps }) => {
    const BackgroundsList = require.context('../src/background', true, /\.jpg$/).keys().map((key) => require(`../src/background${key.substring(1)}`).default.src);

    require.context('../src/background', true, /\.jpg$/).keys().map(async (key) => {
        const a = require(`../src/background${key.substring(1)}`).default;
        const blobImg = await fetch(a.src).then(async a => await a.blob());
    });

    const ModeContext = react.useContext(ThemeModeContext);
    return (<ThemeProvider theme={{color: ModeContext.color, fontSize: ModeContext.fontSize, theme: ModeContext.theme, backgrounds: BackgroundsList}}>
            <Variables/>
            <Animations/>
            <CSSReset />
            <RegisterLetter/>
            <Component {...pageProps} />
        </ThemeProvider>);
}

const _App = (props) => {
    return(<ThemeModeProvider init={{color: "blue", fontSize: 57, theme: 0}}>
        <NotificationProvider>
        <Root {...props}/>
        </NotificationProvider>
    </ThemeModeProvider>);
}

export default _App;