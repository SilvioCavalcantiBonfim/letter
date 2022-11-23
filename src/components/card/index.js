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
    const [OptionsMenu, setOptionsMenu] = react.useState(0);
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
            if (!refOptions.current.contains(e.target))
                setOptionsMenu(0);
            if (!refGlobal.current.contains(e.target)) {
                if (refAnimation.current.className === 'focus') {
                    refAnimation.current.classList.remove('focus');
                    refAnimation.current.classList.add('out');
                    setAuxFocus(1);
                }
            }
        })
    }, []);


    react.useEffect(() => {
        const Interval = OptionsMenu === 2 && setInterval(() => {
            setOptionsMenu(0);
        }, 300);
        return () => OptionsMenu === 2 && clearInterval(Interval);
    }, [OptionsMenu]);

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
                        iconButton: <div style={{ transform: `rotate(${[0, 90][OptionsMenu%1]}deg)`, transition: 'transform .1s linear' }}>
                            <IconButton />
                        </div>,

                        iconButtonComponent:
                            <StyledOptions display={OptionsMenu} ref={refMenu}>
                                <div className="Options">
                                    <button className="WarningButton" onClick={() => { contextNot.add({ id: Date.now(), text: `Denuncia efetuada (#${props.id})`, type: 0 }) }}>
                                        <IconWarning />
                                        <span>Denunciar</span>
                                    </button>
                                </div>
                            </StyledOptions>,

                        HandleHeaderButton: () => setOptionsMenu(v => 1 - v)
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