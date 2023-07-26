import React from 'react';
import './WelcomingLogo.css';
import { IWelcomingLogo } from '../../../interfaces/IWelcomingLogo';
import { Link } from 'react-router-dom';

const WelcomingLogotype = ({ link, logoImgSrc, addImg, elements }: IWelcomingLogo) => {
    // for 7 elements
    // 51.428571428571416
    let startingPoint = 0;
    let angle = 360 / elements.length;
    return (
        <div className='entity'>
            <div className='wrapper'>
                <Link to={link}>
                    <img src={logoImgSrc} alt='' className='logo' />
                </Link>
            </div>
            {elements.map((element) => {
                startingPoint = startingPoint + angle;
                return (
                    <>
                    <div className='path' style={{ "--angle": startingPoint + "deg" } as React.CSSProperties}>
                        <div className='rotatingElementWrapper'>
                            <img src={element} alt='' className='rotatingElement' />
                        </div>
                    </div>
                    <div className='path2' style={{ "--angle": startingPoint + "deg" } as React.CSSProperties}>
                        <div className='rotatingElementWrapper'>
                            <img src={element} alt='' className='rotatingElement' />
                        </div>
                    </div>
                    </>
                )
            })}
        </div>
    )
}

export default WelcomingLogotype;