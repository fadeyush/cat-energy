import React, { FC } from 'react';
import {ReactComponent as LogoMobile} from '../assets/img/logo-mobile.svg';
import {ReactComponent as LogoTablet} from '../assets/img/logo-tablet.svg';
import {ReactComponent as LogoDesktop} from '../assets/img/logo-desktop.svg';
import { LogoProps, ScreenWidth } from '../types/logo';
import { useResize } from '../hooks/useResize';
import { NavLink } from 'react-router-dom';

const PageHeaderLogo: FC<LogoProps> = ({onClick}) => {
    const windowInnerWidth = useResize();
    return (
        <div>
            <NavLink to={'/about'}>
                <div className='navLogo'>
                    <div className='navLogo__wrapper'>   
                        {windowInnerWidth < ScreenWidth.tabletWidth ? <LogoMobile className='navLogo__elem'/> : windowInnerWidth < ScreenWidth.desktopWidth ? <LogoTablet className='navLogo__elem'/> : <LogoDesktop className='navLogo__elem'/>}
                        <button className='navLogo__button' onClick={onClick}/>
                    </div>
                </div>
            </NavLink>
        </div>
    );
};

export default PageHeaderLogo;