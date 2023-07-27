import React, { useState } from 'react';
import { IToggle } from '../../interfaces/IToggle';

const NavBar = ({img, theme}: IToggle) => {
    const [className, setClassName] = useState<boolean>(theme); // default chaos theme
    return (
        <div className={"ToggleContainer" + String(className)}>
        <img src={img} alt='' className={"toggle" + String(className)} onClick={() => {
          setClassName(!className)
        }} />
      </div>
    )
}

export default NavBar;