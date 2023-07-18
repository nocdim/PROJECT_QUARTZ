import React from 'react';
import './Logo.css';

import { Link } from 'react-router-dom'

export interface Logo {
    logoImgSrc: string;
    link: string;
}

const Logotype = ({ logoImgSrc, link }: Logo) => {
    return (
        <Link to={link} className='Logo'>
            <img src={logoImgSrc} alt=''/>
        </Link>
    )
}

export default Logotype;
