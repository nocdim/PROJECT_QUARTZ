import React from 'react';
import './WelcomingLogo.css';
import { Logo } from '../LogoFI' // interface
import Logotype from '../LogoFI'; // react component

interface welcomingLogo extends Logo {
    additionalImgSrc: string;
}

const WelcomingLogotype = ({ link, logoImgSrc, additionalImgSrc }: welcomingLogo) => {
    return (
        <div className=''>
            <img src={additionalImgSrc}/>
            <Logotype
                link={link}
                logoImgSrc={logoImgSrc}
            />
        </div>
    )
}

export default WelcomingLogotype;