import react from 'react';
import { IconPen } from '../../icons';
import FormRegisterLetter from './formRegisterLetter';
import { StyledRegister } from './style';

const RegisterLetter = () => {
    const [ShowForm, setShowForm] = react.useState(0);
    return (<>
        <StyledRegister>
            <button className='addLetterButton' onClick={() => setShowForm(1)}>
                <IconPen />
            </button>
        </StyledRegister>
        {ShowForm !== 0 && <FormRegisterLetter HandleCloseForm={() => setShowForm(0)} />}
    </>);
}

export default RegisterLetter;