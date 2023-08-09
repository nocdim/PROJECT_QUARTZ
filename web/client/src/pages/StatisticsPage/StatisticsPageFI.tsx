import React from 'react';
import { IPageTemplate } from '../../interfaces/IPageTemplate';

const StatisticsPage = ({content, navbar, footer}: IPageTemplate) => {
    return (
        <>
            {navbar}
            {content}
            {footer}
        </>
    )
}

export default StatisticsPage;