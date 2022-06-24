import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/icons/logo.png'

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className='container my-3'>
                <img
                    onClick={() => navigate('/')}
                    role='button' src={Logo} alt="" />
            </div>
        </div>
    );
};

export default Navbar;