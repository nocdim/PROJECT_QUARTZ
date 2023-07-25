import React from 'react';
import { IPageTemplateExtended } from '../../interfaces/IPageTemplateExtended';

const HomePage = ({navbar, content, footer, sidebar}: IPageTemplateExtended) => {
    return (
        <>
            {navbar}
            {content}
            {sidebar}
            {footer}
        </>
    )
}

export default HomePage;