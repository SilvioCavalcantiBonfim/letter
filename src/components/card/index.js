import react from "react";
import { IconButton, IconLetter, IconLetterOpen, IconShare, IconThumbDownLine, IconThumbUpLine, IconWarning } from "../../icons";
import { NotificationContext } from "../notification/NotificationSystem";
import { StyledActions, StyledConteiner, StyledOptions, StyledTextContent, StyledCard } from "./style";

const Card = (props) => {
    // contextos
    const contextNot = react.useContext(NotificationContext);

    // estados
    const [Hover, setHover] = react.useState(0);

    // Referencias
    const refOptions = react.useRef(null);
    const refGlobal = react.useRef(null);
    const refAnimation = react.useRef(null);
    const refMenu = react.useRef(null);

    // Focus control
    const [StateFocus, setStateFocus] = react.useState(0);

    react.useEffect(() => {
        window.addEventListener("click", (e) => {
            if (!refGlobal.current.contains(e.target))
                setStateFocus(v => (v === 1) ? 2 : v);
        })
    }, []);

    react.useEffect(() => {
        const overStateFocus = StateFocus === 2 && setInterval(() => {
            setStateFocus(0);
        }, 300);
        return () => StateFocus === 2 && clearInterval(overStateFocus);
    }, [StateFocus]);


    // Option menu control
    const [StateOptionMenu, setStateOptionMenu] = react.useState(0);

    react.useEffect(() => {
        window.addEventListener("click", (e) => {
            if (!refOptions.current.contains(e.target))
                setStateOptionMenu(v => (v === 1) ? 2 : v);
        })
    }, []);

    react.useEffect(() => {
        const overStateOptionMenu = StateOptionMenu === 2 && setInterval(() => {
            setStateOptionMenu(0);
        }, 300);
        return () => StateOptionMenu === 2 && clearInterval(overStateOptionMenu);
    }, [StateOptionMenu]);
    //
    return (<StyledConteiner>
        <div className={['mini', 'focus in', 'focus out'][StateFocus]} ref={refAnimation}>
            <div ref={refGlobal}>
                <StyledCard
                    onMouseOver={() => setHover(1)}
                    onMouseOut={() => setHover(0)}
                    onClick={(e) => (!refOptions.current.contains(e.target) && !refMenu.current.contains(e.target)) && setStateFocus(1)}
                    StateFocus={StateFocus}
                    >
                    <div className="header">
                        <div className="content">
                            <div className="monogram">{[<IconLetter />, <IconLetterOpen />][Hover]}</div>
                            <div className="contentText">
                                <div className="textHeader">
                                    <span>{props.title}</span>
                                </div>
                                <div className="textSubhead"><span>{props.pseudonyms}</span></div>
                            </div>
                            <div className="iconButtonContent" style={{ position: ['static', 'relative', 'relative'][StateOptionMenu] }}>
                                <button
                                    type="button"
                                    className="iconButton"
                                    ref={refOptions}
                                    onClick={() => setStateOptionMenu(v => (v < 2) ? v + 1 : v)}>
                                    <IconButton />
                                </button>
                                <StyledOptions StateOptionMenu={StateOptionMenu} ref={refMenu}>
                                    <div className={`Options${['', ' an1', ' an2'][StateOptionMenu]}`}>
                                        <button className="ShareButton" onClick={() => {
                                            contextNot.add({ id: Date.now(), text: `${props.title || 'Title'} copiado.`, type: 1 });
                                            navigator.clipboard.writeText(`${props.title}\n${props.pseudonym}\n\n${props.text}`)
                                        }}>
                                            <IconShare />
                                            <span>Copiar</span>
                                        </button>
                                        <button className="WarningButton" onClick={() => {
                                            contextNot.add({ id: Date.now(), text: `Denuncia efetuada (#${props.id})`, type: 0 })
                                        }}>
                                            <IconWarning />
                                            <span>Denunciar</span>
                                        </button>
                                    </div>
                                </StyledOptions>
                            </div>
                        </div>
                    </div>
                    <div className="media">
                        <img className="defualtMedia" src={props.image} />
                    </div>
                    <div className="Textcontent">
                        <div className="supportingText">
                            <StyledTextContent>{[<p>{props.text.substring(0,200)}...</p>, props.text.split('\n').map((e, i) => <p key={i}>{e}</p>), props.text.split('\n').map((e, i) => <p key={i}>{e}</p>)][StateFocus]}</StyledTextContent>
                        </div>
                        <div className="actions">
                            <StyledActions value={props.evaluation}>
                                <div className="avaliation"/>
                            </StyledActions>
                        </div>
                    </div>
                </StyledCard>
            </div>
        </div>
    </StyledConteiner>);
}

export default Card;