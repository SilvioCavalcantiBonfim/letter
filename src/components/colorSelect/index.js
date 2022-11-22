import react from "react";
import {IconGit, IconLinkedin, IconSetting, IconTwitter } from "../../icons";
import { ThemeModeContext } from "../../ThemeControl";
import Slide from "./slide";
import { StyledColor, StyledColorSelect } from "./style";
import SwitchTheme from "./SwitchTheme";

const ColorSelect = () => {
    const ThemeMode = react.useContext(ThemeModeContext);
    const [Display, setDisplay] = react.useState(0);
    const box = react.useRef(null);

    react.useEffect(() => {
        window.addEventListener("click", (e) => {
            if (!box.current.contains(e.target))
                setDisplay(0);
        })
    }, []);

    return (<StyledColorSelect display={['none', 'block'][Display]} ref={box}>
        <button className="iconButtonSetting" onClick={() => setDisplay(v => 1 - v)}><IconSetting /></button>
        <div className="conteinerSetting">
            <div className="MenuColor">
                <div className="selectColorConteiner">
                    <div className="title">Configurações</div>
                </div>
                <hr/>
                <div className="selectColorConteiner"> 
                    <div className="selectColorTitle">Tema</div>
                    <button className="selectColorButton" onClick={() => ThemeMode.ToogleTheme()}>
                        <SwitchTheme theme={ThemeMode.theme}/>
                    </button>
                </div>
                {/* <hr /> */}
                <div className="selectColorConteiner">
                    <div className="selectColorTitle">Cor</div>
                    <div className="ColorConteiner">
                        {['gold', 'green', 'pink', 'blue'].map((e, i) => {
                            return <StyledColor color={e} onClick={() => ThemeMode.setColor(e)} key={i} />
                        })}
                    </div>
                </div>
                {/* <hr /> */}
                <div className="selectColorConteiner">
                    <div className="selectColorTitle">Fonte</div>
                    <Slide min={44} max={70} value={ThemeMode.fontSize} onChange={(e) => ThemeMode.setFontSize(e.target.value)}/>
                </div>
                <hr />
                <div className="selectColorConteinerLinks">
                    <a className="LinkIcon" href="https://github.com/SilvioCavalcantiBonfim/letter" target="_blank" title="Projeto GitHub"><IconGit /></a>
                    <a className="LinkIcon" href={`https://www.linkedin.com/in/silvio-cavalcanti-1096768a`} target="_blank" title="Contato do Dev"><IconLinkedin /></a>
                    <a className="LinkIcon" href={`https://twitter.com/SilvioCBONFIM`} target="_blank" title="Contato do Dev"><IconTwitter /></a>
                </div>
            </div>

        </div>
    </StyledColorSelect>);
}

export default ColorSelect;