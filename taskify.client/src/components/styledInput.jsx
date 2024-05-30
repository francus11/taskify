
import React from 'react';
import './styles/styledinput.css';

const styledInput = ({ placeholder, text, type }) => {

    return (
        <div className='styledInputContainer'>
            <p className='styledInputText'>{text}</p>
            {type === 'password' ? (
                <input type='password' className='styledInput' placeholder={placeholder} />
            ) : (
                <input type='text' className='styledInput' placeholder={placeholder} />
            )}
        </div>
    );  
}

export default styledInput;