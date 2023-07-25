import React from 'react';
import './WelcomingLogo.css';
import { IWelcomingLogo } from '../../../interfaces/IWelcomingLogo';

const WelcomingLogotype = ({ link, logoImgSrc, elements }: IWelcomingLogo) => {
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