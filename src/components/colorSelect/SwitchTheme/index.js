import { StyledSwitchTheme } from "./style";

const SwitchTheme = (props) => {
    return (<StyledSwitchTheme>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path pathLength="1" className={`moon-icon-${['light','dark'][props.theme]}`} d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            <circle pathLength="1" className={`sun-icon-${['light','dark'][props.theme]}`} cx="12" cy="12" r="5"/>
            <line pathLength="1" className={`sun-icon-${['light','dark'][props.theme]}`} x1="12" y1="1" x2="12" y2="3"/>
            <line pathLength="1" className={`sun-icon-${['light','dark'][props.theme]}`} x1="12" y1="21" x2="12" y2="23"/>
            <line pathLength="1" className={`sun-icon-${['light','dark'][props.theme]}`} x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line pathLength="1" className={`sun-icon-${['light','dark'][props.theme]}`} x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line pathLength="1" className={`sun-icon-${['light','dark'][props.theme]}`} x1="1" y1="12" x2="3" y2="12"/>
            <line pathLength="1" className={`sun-icon-${['light','dark'][props.theme]}`} x1="21" y1="12" x2="23" y2="12"/>
            <line pathLength="1" className={`sun-icon-${['light','dark'][props.theme]}`} x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line pathLength="1" className={`sun-icon-${['light','dark'][props.theme]}`} x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
    </StyledSwitchTheme>);
}

export default SwitchTheme;

