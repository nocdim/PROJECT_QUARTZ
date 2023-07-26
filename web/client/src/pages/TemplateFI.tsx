import React from 'react';
import { IPageTemplate } from '../interfaces/IPageTemplate';
import Logotype from '../components/logo/LogoFI';

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
                <div>{footer(Logotype,[])}</div>
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
                <div>{footer(Logotype,[])}</div>
            </>
        )
    }
}

export default Template;