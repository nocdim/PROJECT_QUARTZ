import React from 'react';
import { IPageTemplate } from '../../interfaces/IPageTemplate';

const AboutPage = ({content, navbar, footer}: IPageTemplate) => {
    return (
        <>
            {navbar}
            {content}
            {footer}
        </>
    )
}

export default AboutPage;