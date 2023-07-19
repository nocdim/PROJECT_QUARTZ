import React from 'react';
import './WelcomingLogo.css';
import { Logo } from '../LogoFI' // interface
import Logotype from '../LogoFI'; // react component

interface welcomingLogo extends Logo {
    triangleO: string;
    triangleL: string;
    triangleP: string;
}

const WelcomingLogotype = ({ link, logoImgSrc, triangleO, triangleL, triangleP }: welcomingLogo) => {
    return (
            <div className='wholeEntity'>
                <div className='multiColoredTriangles'>
                    <img src={triangleO} alt='' className='triangleO' />
                    <img src={triangleL} alt='' className='triangleL' />
                    <img src={triangleP} alt='' className='triangleP' />
                </div>
                <div className='primaryTriangle'>
                    <Logotype
                        link={link}
                        logoImgSrc={logoImgSrc}
                    />
                </div>
            </div>  
    )
}

export default WelcomingLogotype;