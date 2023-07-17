import React from 'react';
import { PageTemplate } from '../TemplateFI';

interface HomePageTemplate extends PageTemplate {
    sidebar: React.ReactNode;
}

const HomePage = ({navbar, content, footer, sidebar}: HomePageTemplate) => {
    return (
        <div>
            {navbar}
            {content}
            {sidebar}
            {footer}
        </div>
    )
}

export default HomePage;