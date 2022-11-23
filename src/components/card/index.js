import react from "react";
import { IconButton, IconLetter, IconLetterOpen, IconThumbDownLine, IconThumbUpLine, IconWarning } from "../../icons";
import GenericalCard from "../genericalCard";
import { NotificationContext } from "../notification/NotificationSystem";
import { StyledActions, StyledConteiner, StyledOptions, StyledTextContent } from "./style";

const Card = (props) => {
    // contextos
    const contextNot = react.useContext(NotificationContext);

    // estados
    const [Hover, setHover] = react.useState(0);
    const [focus, setFocus] = react.useState(0);
    const [auxFocus, setAuxFocus] = react.useState(0);
    
    // Referencias
    const refOptions = react.useRef(null);
    const refGlobal = react.useRef(null);
    const refAnimation = react.useRef(null);
    const refMenu = react.useRef(null);
    //effect control out
    react.useEffect(() => {
        const timeOver = auxFocus && setInterval(() => {
            refAnimation.current.classList.remove('out');
            setFocus(0);
            setAuxFocus(0);
        }, 300);
        return () => auxFocus && clearInterval(timeOver);
    }, [auxFocus]);
    
    react.useEffect(() => {
        window.addEventListener("click", (e) => {
            if (!refGlobal.current.contains(e.target)) {
                if (refAnimation.current.className === 'focus') {
                    refAnimation.current.classList.remove('focus');
                    refAnimation.current.classList.add('out');
                    setAuxFocus(1);
                }
            }
        })
    }, []);
    
    
    
    // Option menu control
    const [StateOptionMenu, setStateOptionMenu] = react.useState(0);
    
    react.useEffect(() => {
        window.addEventListener("click", (e) => {
            if (!refOptions.current.contains(e.target))
                setStateOptionMenu(v => (v === 1)?2:v);
        })
    }, []);

    react.useEffect(() => {
        const overStateOptionMenu = StateOptionMenu === 2 && setInterval(() => {
            setStateOptionMenu(0);
        }, 1000);
        return () => StateOptionMenu === 2 && clearInterval(overStateOptionMenu);
    }, [StateOptionMenu]);
    // 
    return (<StyledConteiner
        onMouseOver={() => setHover(1)}
        onMouseOut={() => setHover(0)}
        onClick={(e) => (!refOptions.current.contains(e.target) && !refMenu.current.contains(e.target)) && setFocus(1)}>
        <div className={['mini', 'focus'][focus]} ref={refAnimation}>
            <div ref={refGlobal}>
                <GenericalCard
                    width={["360px", "100%"][focus]}

                    header={{
                        title: props.title || 'Title',
                        subtitle: props.pseudonym || 'pseudônimo',

                        monogram: [<IconLetter />, <IconLetterOpen />][Hover],
                        iconRef: refOptions,
                        iconButton: <div style={{ transform: `rotate(${[0, 90, 0][StateOptionMenu]}deg)`, transition: 'transform .1s linear' }}>
                            <IconButton />
                        </div>,

                        iconButtonComponent:
                            <StyledOptions StateOptionMenu={StateOptionMenu} ref={refMenu}>
                                <div className={`Options${['', ' an1', ' an2'][StateOptionMenu]}`}>
                                    <button className="WarningButton" onClick={() => { contextNot.add({ id: Date.now(), text: `Denuncia efetuada (#${props.id})`, type: 1 }) }}>
                                        <IconWarning />
                                        <span>Denunciar</span>
                                    </button>
                                    <button className="WarningButton" onClick={() => { contextNot.add({ id: Date.now(), text: `Denuncia efetuada (#${props.id})`, type: 0 }) }}>
                                        <IconWarning />
                                        <span>Denunciar</span>
                                    </button>
                                </div>
                            </StyledOptions>,

                        HandleHeaderButton: () => setStateOptionMenu(v => (v < 2)?v + 1:v)
                    }}

                    media={{ backgroundColor: '#dadce0' }}

                    textcontent={{
                        component: <StyledTextContent>{[props.text.split('\n').slice(0, 3), props.text.split('\n')][focus].map((e, i) => <p key={i}>{e}</p>)}</StyledTextContent>
                    }}

                    actions={{
                        component: <StyledActions>
                            <button className="button1"><IconThumbDownLine /></button>
                            <button className="button2"><IconThumbUpLine /></button>
                        </StyledActions>
                    }}
                />
            </div>
        </div>
    </StyledConteiner>);
}

export default Card;