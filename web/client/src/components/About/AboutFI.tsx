import React from 'react';
import './About.css';
const triangle = require('../../assets/triangle.png');
const triangleQuestion = require('../../assets/triangleQuestion.png');
const About = () => {
    return (
        <div className='About'>
            <div className='Path'>
                <img src={triangleQuestion} alt='' className='PrimaryShape' />
                <img src={triangle} alt='' className='RotatingShape' />
            </div>
        </div>
    )
}

export default About;