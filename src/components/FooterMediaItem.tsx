import React, { FC } from 'react';
import { MediaProps } from '../types/footer';
import { NavLink } from 'react-router-dom';

const FooterMediaItem: FC<MediaProps> = ({link, name, ikon, className}) => {
    return (
        <li className='footer-media__item'>
            <NavLink to={link} className={`${className} footer-media__ikon`}>
                {ikon}
                <p className='visually-hidden'>{name}</p>
            </NavLink> 
        </li>
    );
};

export default FooterMediaItem;