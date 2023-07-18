import React from 'react';
import './Logo.css';

import { Link } from 'react-router-dom'

export interface Logo {
    logoImgSrc: string;
    link: string;
}

const Logotype = ({ logoImgSrc, link }: Logo) => {
    return (
        <div className=''>
            <Link to={link} className=''>
                <img src={logoImgSrc}/>   
            </Link>
        </div>
    )
}

export default Logotype;
