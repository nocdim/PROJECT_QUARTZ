import React from 'react';
import './WelcomingLogo.css';
import { IWelcomingLogo } from '../../../interfaces/IWelcomingLogo';
import { Link } from 'react-router-dom';

const WelcomingLogotype = ({ link, logoImgSrc, addImg, abbreviation, elements }: IWelcomingLogo) => {
    // for 7 elements
    // 51.428571428571416
    let startingPointElem = 0;
    let startingPointAbb = 0;
    let angleElem = 0;
    let angleAbb = 0;
    if (elements.length !== 0) {
        angleElem = 360 / elements.length;
    }
    if (abbreviation.length !== 0) {
        angleAbb = 360 / abbreviation.length;  
    }
    return (
        <div className='entity'>
            <div className='wrapper'>
                <Link to={link}>
                    <img src={logoImgSrc} alt='' className='logo' />
                </Link>
            </div>
            {elements.map((element) => {
                startingPointElem = startingPointElem + angleElem;
                return (
                    <>
                        <div className='path2' style={{ "--angle": -startingPointElem + "deg" } as React.CSSProperties}>
                            <div className='rotatingElementWrapper'>
                                <p className='rotatingElement' style={{ "--angle": -angleElem + "deg" } as React.CSSProperties }>{element}</p>
                            </div>
                        </div> 
                    </>
                )
            })}
            {abbreviation.map((letter) => {
                startingPointAbb = startingPointAbb + angleAbb;
                return (
                    <>
                        <div className='path' style={{ "--angle": -startingPointAbb + "deg" } as React.CSSProperties}>
                            <div className='rotatingElementWrapperAbb'>
                                <p className='rotatingElementAbb' style={{ "--angle": -angleAbb + "deg",  } as React.CSSProperties}>{letter}</p>
                            </div>
                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default WelcomingLogotype;