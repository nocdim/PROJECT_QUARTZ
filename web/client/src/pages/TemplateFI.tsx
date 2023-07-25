import React from 'react';
import { IPageTemplate } from '../interfaces/IPageTemplate';

const Template = ({ navbar, content, footer }: IPageTemplate) => {
    if (navbar === undefined && footer === undefined) {
        return (
            <>
                <div>{content}</div>
            </>
        )
    } else if (navbar === undefined && footer !== undefined) {
        return (
            <>
                <div>{content}</div>
                <div>{footer}</div>
            </>
        )
    } else if (navbar !== undefined && footer === undefined) {
        return (
            <>
                <div>{navbar}</div>
                <div>{content}</div>
            </>
        )
    } else if (navbar !== undefined && footer !== undefined) {
        return (
            <>
                <div>{navbar}</div>
                <div>{content}</div>
                <div>{footer}</div>
            </>
        )
    }
}

export default Template;