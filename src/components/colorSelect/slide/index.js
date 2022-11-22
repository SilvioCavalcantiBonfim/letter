import react from "react";
import { StyledSlide } from "./style";

const Slide = (props) => {
    const [Value, setValue] = react.useState(props.value);
    const [trigger, setTrigger] = react.useState(0);

    return (<StyledSlide value={Math.floor((Value - props.min) / (props.max - props.min) * 100)}>
        {trigger === 1 && <div className="label">
            <div>
                <span>{Value}</span>
            </div>
        </div>}
        <div className="ConteinerSlide">
            <input
                type='range'
                className="slide"
                max={props.max}
                value={Value}
                min={props.min}
                onChange={(e) => {
                    setValue(e.target.value);
                    props.onChange(e);
                }}
                onMouseDown={() => setTrigger(1)}
                onMouseUp={() => setTrigger(0)} />
        </div>
    </StyledSlide>);
}

export default Slide;