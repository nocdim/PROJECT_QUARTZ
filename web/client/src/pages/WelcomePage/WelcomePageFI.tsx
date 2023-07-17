import React from 'react';
import { PageTemplate } from '../TemplateFI';

interface WelcomePageTemplate extends PageTemplate {
    about: React.ReactNode;
}

const WelcomePage = ({content, about}: WelcomePageTemplate) => {
    return (
        <div>
            {content}
            {about}
        </div>
    )
}

export default WelcomePage;