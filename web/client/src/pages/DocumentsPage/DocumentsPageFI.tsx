import React from 'react';
import { IPageTemplate } from '../../interfaces/IPageTemplate';

const DocumentsPage = ({content, navbar, footer}: IPageTemplate) => {
    return (
        <>
            {navbar}
            {content}
            {footer}
        </>
    )
}

export default DocumentsPage;