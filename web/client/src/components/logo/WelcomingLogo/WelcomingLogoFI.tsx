import React from 'react';
import './WelcomingLogo.css';
import { Logo } from '../LogoFI' // interface
import Logotype from '../LogoFI'; // react component

interface welcomingLogo extends Logo {
    elements: string[];
}

const WelcomingLogotype = ({ link, logoImgSrc, elements }: welcomingLogo) => {
    return (
        <div>
            {elements.map((element) => {
                return (
                    <div className='path'>
                        <img src={element} alt='' />
                    </div>
                )
            })}
        </div>
    )
}

export default WelcomingLogotype;