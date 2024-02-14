import React, { FC } from 'react';
import {ReactComponent as LogoMobile} from '../assets/img/logo-mobile.svg';
import {ReactComponent as LogoTablet} from '../assets/img/logo-tablet.svg';
import {ReactComponent as LogoDesktop} from '../assets/img/logo-desktop.svg';
import { LogoProps, ScreenWidth } from '../types/logo';
import { useResize } from '../hooks/useResize';

const PageHeaderLogo: FC<LogoProps> = ({onClick}) => {
    const windowInnerWidth = useResize();
    return (
        <div>
            <div className='navLogo'>
                <div className='navLogo__wrapper'>
                     {windowInnerWidth <= ScreenWidth.mobileWidth ? <LogoMobile className='navLogo__elem'/> : windowInnerWidth <= ScreenWidth.tabletWidth ? <LogoTablet className='navLogo__elem'/> : <LogoDesktop className='navLogo__elem'/>}
                    <button className='navLogo__button' onClick={onClick}/>
                </div>
            </div>
        </div>
    );
};

export default PageHeaderLogo;