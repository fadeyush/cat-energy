import React, { FC } from 'react';
import {ReactComponent as Logo} from '../assets/img/logo-mobile.svg';

interface LogoProps {
    onClick: () => void;
}

const PageHeaderLogo: FC<LogoProps> = ({onClick}) => {
    
    return (
        <div>
            <div className='navLogo'>
                <div className='navLogo__wrapper'>
                    <Logo className='navLogo__elem'/>
                    <button className='navLogo__button' onClick={onClick}/>
                </div>
            </div>
        </div>
    );
};

export default PageHeaderLogo;