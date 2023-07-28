import React, { useState } from 'react';
import { IToggle } from '../../interfaces/IToggle';
import './Toggle.css'

const Toggle = ({img, theme, onClick}: IToggle) => {
    return (
        <div className={"ToggleContainer" + String(theme)}>
        <img src={img} alt='' className={"toggle" + String(theme)} onClick={onClick} />
      </div>
    )
}

export default Toggle;