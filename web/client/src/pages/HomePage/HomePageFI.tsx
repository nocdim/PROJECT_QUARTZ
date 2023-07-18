import React from 'react';
import { PageTemplate } from '../TemplateFI';

interface HomePageTemplate extends PageTemplate {
    sidebar: React.ReactNode;
}

const HomePage = ({navbar, content, footer, sidebar}: HomePageTemplate) => {
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