import React from 'react';
import { INavBar } from '../../interfaces/INavBar';
import './NavBar.css';

const NavBar: React.FC<INavBar> = ({logo, searchBar, isOpen}) => {
    return (
        <div className='NavBar'>NavBar</div>
    )
}

export default NavBar;