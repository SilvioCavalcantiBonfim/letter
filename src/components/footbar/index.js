import { IconGit, IconLinkedin, IconTwitter } from "../../icons";
import { StyledFooter } from "./style";

const Footer = () => {
    return <StyledFooter>
        <div className="footer1">
            <a className="LinkIcon" href="https://github.com/SilvioCavalcantiBonfim/letter" target="_blank" title="Projeto GitHub"><IconGit /></a>
            <a className="LinkIcon" href={`https://www.linkedin.com/in/silvio-cavalcanti-1096768a`} target="_blank" title="Contato do Dev"><IconLinkedin /></a>
            <a className="LinkIcon" href={`https://twitter.com/SilvioCBONFIM`} target="_blank" title="Contato do Dev"><IconTwitter /></a>
        </div>
    </StyledFooter>
}

export default Footer;