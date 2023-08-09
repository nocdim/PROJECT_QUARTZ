import React from 'react';
import { IPageTemplate } from '../../interfaces/IPageTemplate';

const AdminPage = ({content, navbar, footer}: IPageTemplate) => {
    return (
        <>
            {navbar}
            {content}
            {footer}
        </>
    )
}

export default AdminPage;