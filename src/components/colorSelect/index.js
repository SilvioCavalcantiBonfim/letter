import react from "react";
import { ThemeModeContext } from "../../ThemeControl";
import { StyledColorSelect } from "./style";

const ColorSelect = () => {
    const ThemeMode = react.useContext(ThemeModeContext);
    const [Display, setDisplay] = react.useState(0);
    const box = react.useRef(null);

    react.useEffect(() => {
        window.addEventListener("click", (e) => {
            if(!box.current.contains(e.target))
                setDisplay(0);
        })
    }, []);

    return (<StyledColorSelect display={['none', 'block'][Display]} ref={box}>
        <button className="iconButtonSetting" onClick={() => setDisplay(v => 1 - v)} id="teste"><IconSetting id="teste" /></button>
        <div className="conteinerSetting" id="teste">
            <div className="MenuColor" id="teste">
                <div className="selectColor" id="teste">
                    <div className="Color1" onClick={() => ThemeMode.setColor('gold')} title="Ouro" id="teste" />
                    <div className="Color2" onClick={() => { ThemeMode.setColor('lavender') }} title="Lavanda" id="teste" />
                    <div className="Color3" onClick={() => ThemeMode.setColor('green')} title="Verde" id="teste" />
                    <div className="Color4" onClick={() => ThemeMode.setColor('pink')} title="Rosa" id="teste" />
                </div>
                <hr id="teste" />
                <div className="linkMenu" id="teste">
                    <a href="https://github.com/SilvioCavalcantiBonfim/letter" id="teste" target="_blank" title="Projeto GitHub"><IconGit /></a>
                    <a href={`https://www.linkedin.com/in/silvio-cavalcanti-1096768a`} id="teste" target="_blank" title="Contato do Dev"><IconLinkedin /></a>
                    <a href={`https://twitter.com/SilvioCBONFIM`} id="teste" target="_blank" title="Contato do Dev"><IconTwitter /></a>
                </div>
            </div>

        </div>
    </StyledColorSelect>);
}

export default ColorSelect;

const IconSetting = () => {
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.000976741 0.76001 20.01 20.49" width="20.010976741px">
        <path fill="currentColor" d="M13.3102 20.03C13.2102 20.71 12.5902 21.25 11.8502 21.25H8.15023C7.41023 21.25 6.79023 20.71 6.70023 19.98L6.43023 18.09C6.16023 17.95 5.90023 17.8 5.64023 17.63L3.84023 18.35C3.14023 18.61 2.37023 18.32 2.03023 17.7L0.200234 14.53C-0.149766 13.87 0.000234306 13.09 0.560234 12.65L2.09023 11.46C2.08023 11.31 2.07023 11.16 2.07023 11C2.07023 10.85 2.08023 10.69 2.09023 10.54L0.570234 9.35001C-0.0197657 8.90001 -0.169766 8.09001 0.200234 7.47001L2.05023 4.28001C2.39023 3.66001 3.16023 3.38001 3.84023 3.65001L5.65023 4.38001C5.91023 4.21001 6.17023 4.06001 6.43023 3.92001L6.70023 2.01001C6.79023 1.31001 7.41023 0.76001 8.14023 0.76001H11.8402C12.5802 0.76001 13.2002 1.30001 13.2902 2.03001L13.5602 3.92001C13.8302 4.06001 14.0902 4.21001 14.3502 4.38001L16.1502 3.66001C16.8602 3.40001 17.6302 3.69001 17.9702 4.31001L19.8102 7.49001C20.1702 8.15001 20.0102 8.93001 19.4502 9.37001L17.9302 10.56C17.9402 10.71 17.9502 10.86 17.9502 11.02C17.9502 11.18 17.9402 11.33 17.9302 11.48L19.4502 12.67C20.0102 13.12 20.1702 13.9 19.8202 14.53L17.9602 17.75C17.6202 18.37 16.8502 18.65 16.1602 18.38L14.3602 17.66C14.1002 17.83 13.8402 17.98 13.5802 18.12L13.3102 20.03ZM8.62023 19.25H11.3802L11.7502 16.7L12.2802 16.48C12.7202 16.3 13.1602 16.04 13.6202 15.7L14.0702 15.36L16.4502 16.32L17.8302 13.92L15.8002 12.34L15.8702 11.78L15.8733 11.7531C15.9023 11.5027 15.9302 11.2607 15.9302 11C15.9302 10.73 15.9002 10.47 15.8702 10.22L15.8002 9.66001L17.8302 8.08001L16.4402 5.68001L14.0502 6.64001L13.6002 6.29001C13.1802 5.97001 12.7302 5.71001 12.2702 5.52001L11.7502 5.30001L11.3802 2.75001H8.62023L8.25023 5.30001L7.72023 5.51001C7.28023 5.70001 6.84023 5.95001 6.38023 6.30001L5.93023 6.63001L3.55023 5.68001L2.16023 8.07001L4.19023 9.65001L4.12023 10.21C4.09023 10.47 4.06023 10.74 4.06023 11C4.06023 11.26 4.08023 11.53 4.12023 11.78L4.19023 12.34L2.16023 13.92L3.54023 16.32L5.93023 15.36L6.38023 15.71C6.81023 16.04 7.24023 16.29 7.71023 16.48L8.24023 16.7L8.62023 19.25ZM13.5002 11C13.5002 12.933 11.9332 14.5 10.0002 14.5C8.06724 14.5 6.50023 12.933 6.50023 11C6.50023 9.06701 8.06724 7.50001 10.0002 7.50001C11.9332 7.50001 13.5002 9.06701 13.5002 11Z" />
    </svg>);
}

const IconGit = () => {
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="none" d="M0 0h24v24H0z" />
        <path fill="currentColor" d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z" />
    </svg>);
}

const IconLinkedin = () => {
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22">
        <path fill="none" d="M0 0h24v24H0z" />
        <path fill="currentColor" d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
    </svg>);
}

const IconTwitter = () => {
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="none" d="M0 0h24v24H0z" />
        <path fill="currentColor" d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
    </svg>);
}