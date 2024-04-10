import React, { FC } from 'react';
import classes from './FooterCopyright.module.scss';
import {ReactComponent as LogoHTMLAcademy} from '../../assets/img/icons/logo-htmlacademy.svg';
import { NavLink } from 'react-router-dom';

const FooterCopyright: FC = () => {
    return (
        <NavLink to={'https://htmlacademy.ru/'} className={classes.footerCopyright}>
            <p className={classes.footerCopyright__info}>HTML Academy</p>
            <LogoHTMLAcademy className={classes.footerCopyright__logo}/>
        </NavLink>
    );
};

export default FooterCopyright;