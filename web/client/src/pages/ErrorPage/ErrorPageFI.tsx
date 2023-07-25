import React from 'react';
import { IPageTemplate } from '../../interfaces/IPageTemplate';

const ErrorPage = ({content}: IPageTemplate) => {
    return (
        <>
            {content}
        </>
    )
}

export default ErrorPage;