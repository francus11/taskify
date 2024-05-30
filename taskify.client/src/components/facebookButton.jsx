import React from 'react';
import './styles/facebookButton.css';

import { FaFacebook, FaGoogle } from 'react-icons/fa';

const facebookButton = ({ text, type }) => {
    return (
        <>
            {type === 'fb' ? (
                <button className='facebookButton'>
                    <FaFacebook className='facebookIcon' />
                    {text}
                </button>
            ) : (
                <button className='facebookButton'>
                    <FaGoogle className='googleIcon' />
                    {text}
                </button>
            )}
        </>
    );
}

export default facebookButton;