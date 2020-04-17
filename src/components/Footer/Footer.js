import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { Wrapper, CopyrightText, Menu } from './FooterStyles';

export default function Footer() {
    const siteName = useSelector(({ site }) => site.name);

    return (
        <Wrapper>
            <CopyrightText>{`\u00A9 ${siteName}`} | a part of eMart</CopyrightText>
            <Menu>
                <ul>
                    <li>Privacy Policy</li>
                    <li>Contact Us</li>
                </ul>
            </Menu>
        </Wrapper>
    )
}

Footer.prototype = {
    isHome: PropTypes.bool,
}

Footer.defaultProps = {
    isHome: null,
}