import React from 'react';
import './Logo.css';

import { Link } from 'react-router-dom'
import { ILogo } from '../../interfaces/ILogo';

const Logotype = ({ logoImgSrc, link }: ILogo) => {
    return (
        <Link to={link} className='Logo'>
            <img src={logoImgSrc} alt=''/>
        </Link>
    )
}

export default Logotype;
