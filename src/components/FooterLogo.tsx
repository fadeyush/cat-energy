import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import {ReactComponent as LogoFooter} from '../assets/img/logo-footer.svg';
import { LogoProps } from '../types/logo';
import '../styles/footerLogo.scss'

const FooterLogo: FC<LogoProps> = ({onClickLogo}) => {
    return (
        <NavLink onClick={onClickLogo} className='logo-footer__wrapper' to={'/about'}>
            <LogoFooter className='logo-footer'/>
        </NavLink>
    );
};

export default FooterLogo;