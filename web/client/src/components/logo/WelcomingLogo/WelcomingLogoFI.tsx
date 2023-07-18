import React from 'react';
import './WelcomingLogo.css';
import { Logo } from '../LogoFI' // interface
import Logotype from '../LogoFI'; // react component

interface welcomingLogo extends Logo {
    RG: string;
    RB: string;
    BG: string;
    additionalImgSrc: string;
}

const WelcomingLogotype = ({ link, logoImgSrc, additionalImgSrc }: welcomingLogo) => {
    return (
        <>
            <img src={additionalImgSrc} alt='' className='Abbreviature'/>
            <Logotype
                link={link}
                logoImgSrc={logoImgSrc}
            />
        </>
    )
}

export default WelcomingLogotype;