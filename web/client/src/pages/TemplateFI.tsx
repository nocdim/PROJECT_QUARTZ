import React from 'react';

export interface PageTemplate {
    navbar?: React.ReactNode;
    content: React.ReactNode;
    footer?: React.ReactNode;
}

const Template = ({ navbar, content, footer }: PageTemplate) => {
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