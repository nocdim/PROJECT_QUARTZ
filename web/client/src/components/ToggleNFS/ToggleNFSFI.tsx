import React from 'react';
import { IToggleNFS } from '../../interfaces/IToggleNFS';

const ToggleNFS:React.FC<IToggleNFS> = ({navbar, footer, sidebar}) => {
    return (
        <div className='ToggleNFSContainer'>
            <div className='ToggleNContainer'>
                {navbar}
            </div>
            <div className='ToggleSContainer'>
                {sidebar}
            </div>
            <div className='ToggleFContainer'>
                {footer}
            </div>
        </div>
    )
}

export default ToggleNFS;