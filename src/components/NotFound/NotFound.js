import React from 'react';
import { Helmet } from 'react-helmet';
import { NOT_FOUND } from 'constants/strings';
import { Wrapper, Content, Logo } from './NotFoundStyles';

export default function NotFound({error}) {

    return (
        <>
            <Helmet>
                <title>Not Found | One Mart</title>
            </Helmet>
            <Wrapper>
                <Content>
                    <Logo>oneMart</Logo>
                    {error || NOT_FOUND}
                </Content>
            </Wrapper>
        </>
    );
}
