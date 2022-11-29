import react from "react";
import { IconButton, IconLetter, IconLetterOpen, IconShare, IconThumbDownLine, IconThumbUpLine, IconWarning } from "../../icons";
import { SupaBase } from "../../supabase";
import { NotificationContext } from "../notification/NotificationSystem";
import { StyledActions, StyledConteiner, StyledOptions, StyledTextContent, StyledCard } from "./style";

const Card = (props) => {
    // contextos
    const contextNot = react.useContext(NotificationContext);

    // estados
    const [Hover, setHover] = react.useState(0);
    const [PropsCard, setPropsCard] = react.useState(props);

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
    //sistema de avaliação
    const avaliationRef = react.useRef(null); 
    const [currentAvaliation, setCurrentAvaliation] = react.useState(PropsCard.ratings);
    return (<StyledConteiner>
        <div className={['mini', 'focus in', 'focus out'][StateFocus]} ref={refAnimation}>
            <div ref={refGlobal}>
                <StyledCard
                    onMouseOver={() => setHover(1)}
                    onMouseOut={() => setHover(0)}
                    onClick={(e) => (!avaliationRef.current.contains(e.target) && !refOptions.current.contains(e.target) && !refMenu.current.contains(e.target)) && setStateFocus(1)}
                    StateFocus={StateFocus}
                    >
                    <div className="header">
                        <div className="content">
                            <div className="monogram">{[<IconLetter />, <IconLetterOpen />][Hover]}</div>
                            <div className="contentText">
                                <div className="textHeader">
                                    <span>{PropsCard.title}</span>
                                </div>
                                <div className="textSubhead"><span>{PropsCard.pseudonyms}</span></div>
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
                                            contextNot.add({ id: Date.now(), text: `${PropsCard.title || 'Title'} copiado.`, type: 1 });
                                            navigator.clipboard.writeText(`${PropsCard.title}\n${PropsCard.pseudonym}\n\n${PropsCard.text}`)
                                        }}>
                                            <IconShare />
                                            <span>Copiar</span>
                                        </button>
                                        <button className="WarningButton" onClick={async () => {
                                            await SupaBase.from(`letters`).update({'complaint': PropsCard.complaint + 1}).eq('id',PropsCard.id).then(r => {
                                                contextNot.add({ id: Date.now(), text: `Denuncia efetuada (#${PropsCard.id})`, type: 0 })
                                            })
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
                        <img className="defualtMedia" src={PropsCard.image} />
                    </div>
                    <div className="Textcontent">
                        <div className="supportingText">
                            <StyledTextContent>{[PropsCard.text.split('\n').slice(0,4), PropsCard.text.split('\n'), PropsCard.text.split('\n')][StateFocus].map((e, i) => <p key={i}>{e}</p>)}</StyledTextContent>
                        </div>
                        <div className="actions">
                            <StyledActions value={PropsCard.ratings} hoverValue={currentAvaliation}>
                                <div 
                                className="avaliation" 
                                ref={avaliationRef}
                                onMouseOut={(e) => {
                                    setCurrentAvaliation(PropsCard.ratings);
                                }}
                                onMouseMove={(e) => {
                                    const rect = avaliationRef.current.getBoundingClientRect();
                                    setCurrentAvaliation(Number(((e.screenX - rect.left)/rect.width+0.01).toFixed(2)));
                                }}
                                onClick={async (e) => {
                                    await SupaBase.from(`letters`).update({'ratings': (PropsCard.ratings*PropsCard.totalRatings + currentAvaliation)/(PropsCard.totalRatings + 1), 'totalRatings': PropsCard.totalRatings + 1}).eq('id',PropsCard.id).then(r => {
                                        setPropsCard(v => {
                                            return {...v, totalRatings: v.totalRatings+1, ratings: (v.ratings*v.totalRatings+currentAvaliation)/(v.totalRatings+1)};
                                        })
                                        contextNot.add({ id: Date.now(), text: `"${props.title}" Avaliado.`, type: 1 });
                                    })
                                }}
                                />
                            </StyledActions>
                        </div>
                    </div>
                </StyledCard>
            </div>
        </div>
    </StyledConteiner>);
}

export default Card;