import React, { useState } from 'react';
import { IToggle } from '../../interfaces/IToggle';
import './Toggle.css'

const Toggle = ({ img, theme, onClick }: IToggle) => {
  let startingPoint = 0;
  let angle = 0;
  let rotatingElements = [...Array<number>(10)];
  if (rotatingElements.length !== 0) {
    angle = 360 / rotatingElements.length;
  }
  return (
    <div className={"ToggleContainer" + String(theme)}>
      <img src={img} alt='' className={"toggle" + String(theme)} onClick={onClick} />
      {rotatingElements.map(() => {
        startingPoint = startingPoint + angle;
        return (
          <div className='path' style={{ "--angle": startingPoint + "deg" } as React.CSSProperties} onClick={onClick}>
          </div>
        )
      })}
    </div>
  )
}

export default Toggle;