import React, { FC } from 'react';
import {ReactComponent as LogoMobile} from '../assets/img/logo-mobile.svg';
import {ReactComponent as LogoTablet} from '../assets/img/logo-tablet.svg';
import {ReactComponent as LogoDesktop} from '../assets/img/logo-desktop.svg';
import { LogoProps } from '../types/logo';
import { ScreenPointsWidth } from '../types/screenSize';
import { NavLink } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSelector';

const PageHeaderLogo: FC<LogoProps> = ({onClickButton, onClickLogo}) => {
    const {size} = useTypedSelector(state => state.size);
    return (
        <div className='navLogo'>
            <NavLink onClick={onClickLogo} className='navLogo__wrapper' to={'/about'}>
                {size < ScreenPointsWidth.tabletWidth ? <LogoMobile className='navLogo__elem'/> : size < ScreenPointsWidth.desktopWidth ? <LogoTablet className='navLogo__elem'/> : <LogoDesktop className='navLogo__elem'/>}
            </NavLink>
            <button className='navLogo__button' onClick={onClickButton}/>
        </div>
    );
};

export default PageHeaderLogo;