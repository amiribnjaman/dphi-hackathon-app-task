import React from 'react';
import Logo from '../assets/icons/logo.png'

const Navbar = () => {
    return (
        <div>
            <div className='container my-3'>
                <img src={Logo} alt="" />
            </div>
        </div>
    );
};

export default Navbar;