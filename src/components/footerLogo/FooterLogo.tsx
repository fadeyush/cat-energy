import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import {ReactComponent as LogoFooter} from '../assets/img/logo-footer.svg';
import { LogoProps } from '../../types/logo';
import classes from './footerLogo.module.scss';

const FooterLogo: FC<LogoProps> = ({onClickLogo}) => {
    return (
        <NavLink className={classes.logoFooter__wrapper} onClick={onClickLogo} to={'/about'}>
            <LogoFooter className={classes.logoFooter}/>
        </NavLink>
    );
};

export default FooterLogo;