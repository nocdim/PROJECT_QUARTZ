import React from 'react';
import { PageTemplate } from '../TemplateFI';



interface ErrorPageTemplate extends PageTemplate {

}

const ErrorPage = ({content}: ErrorPageTemplate) => {
    return (
        <div>
            {content}
        </div>
    )
}

export default ErrorPage;