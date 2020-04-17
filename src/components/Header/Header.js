import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAsset, isMainSite } from 'config';
import { NavBar, Logo, LogoText, LogoImg, MainMenu } from './HeaderStyles';

export default function Header() {
    const logoUrl = useSelector((state) => state.site.logo_url);
    const logoText = useSelector((state) => state.site.logo_text);
    const mainSite = isMainSite();

    const getLogo = () => {
        if(logoUrl) {
            return  <LogoImg src={getAsset(logoUrl)} alt="Site Logo" />
        }

        return <LogoText>{logoText}</LogoText>;
    }

    return (
        <NavBar>
            <Logo>
                <Link to="/">{getLogo()}</Link>
            </Logo>
            <MainMenu>
                <ul>
                    {mainSite
                        ? (<li><Link to={mainSite.menuLink}>{mainSite.menuItem}</Link></li>)
                        : (<li><Link to="/menu">Menu</Link></li>)}
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </MainMenu>
        </NavBar>
    );
}