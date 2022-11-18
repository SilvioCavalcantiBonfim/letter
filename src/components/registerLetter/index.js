import NotificationControl from '../notification';
import { StyledRegister } from './style';

const RegisterLetter = () => {
    return (<StyledRegister>
        <div className='addLetterConteiner'>
            <div className='addLetterConteiner2'>
                <NotificationControl/>
                <div className='addLetterConteinerButton'>
                    <div className='closedButtonConteiner'>
                        <button className='addLetterButton'>
                            <IconPen />
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </StyledRegister>);
}

const IconPen = () => {
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="none" d="M0 0h24v24H0z" />
        <path fill='currentColor' d="M21 2C6 2 4 16 3 22h1.998c.666-3.333 2.333-5.166 5.002-5.5 4-.5 7-4 8-7l-1.5-1 1-1c1-1 2.004-2.5 3.5-5.5z" /></svg>);
}

export default RegisterLetter;