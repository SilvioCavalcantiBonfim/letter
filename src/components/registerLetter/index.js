import react from 'react';
import { IconPen } from '../../icons';
import FormRegisterLetter from './formRegisterLetter';
import { StyledRegister } from './style';

const RegisterLetter = () => {
    const [ShowForm, setShowForm] = react.useState(false);
    return (<>
        <StyledRegister>
            <button className='addLetterButton' onClick={() => setShowForm(true)}>
                <IconPen />
            </button>
        </StyledRegister>
        {ShowForm && <FormRegisterLetter HandleCloseForm={() => setShowForm(false)} />}
    </>);
}

export default RegisterLetter;