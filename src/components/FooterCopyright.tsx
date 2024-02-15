import React, { FC } from 'react';
import {ReactComponent as LogoHTMLAcademy} from '../assets/img/icons/logo-htmlacademy.svg';
import { NavLink } from 'react-router-dom';

const FooterCopyright: FC = () => {
    return (
        <NavLink to={'https://htmlacademy.ru/'} className='footer-copyright'>
            <p className='footer-copyright__info'>HTML Academy</p>
            <LogoHTMLAcademy className='footer-copyright__logo'/>
        </NavLink>
    );
};

export default FooterCopyright;