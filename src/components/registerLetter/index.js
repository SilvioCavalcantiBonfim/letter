import react from 'react';
import { IconPen } from '../../icons';
import NotificationControl from '../notification';
import FormRegisterLetter from './formRegisterLetter';
import { StyledRegister } from './style';

const RegisterLetter = () => {
    const [ShowForm, setShowForm] = react.useState(false);
    return (<><StyledRegister>
        <div className='addLetterConteiner'>
            <div className='addLetterConteiner2'>
                <NotificationControl/>
                <div className='addLetterConteinerButton'>
                    <div className='closedButtonConteiner'>
                        <button className='addLetterButton' onClick={() => setShowForm(true)}>
                            <IconPen />
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </StyledRegister>
    {ShowForm && <FormRegisterLetter HandleCloseForm={() => setShowForm(false)}/>}
    </>);
}

export default RegisterLetter;