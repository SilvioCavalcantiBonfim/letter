import react from "react";
import { Logo } from "../../icons";
import ColorSelect from "../colorSelect";
import { StyleConteiner, StyledHeader } from "./style";

const Header = (props) => {

    const BackgroundsList = require.context('../../background', true, /\.jpg$/).keys().map((key) => require(`../../background${key.substring(1)}`).default.src);
    const [currentBackground, setCurrentBackground] = react.useState(0);

    react.useEffect(() => {
        BackgroundsList.forEach(e => {
            const preload = new Image();
            preload.src = e;
        });
    }, []);
    
    react.useEffect(() => {
        const nextBackground = setInterval(() => {
            setCurrentBackground(v => (v+1)%BackgroundsList.length);
        }, 9000);
        return () => clearInterval(nextBackground);
    }, [currentBackground]);

    return (<>
        <StyledHeader>
            <Logo />
            <ColorSelect />
        </StyledHeader>
        <StyleConteiner background={BackgroundsList[currentBackground]}/>
    </>);
}


export default Header;