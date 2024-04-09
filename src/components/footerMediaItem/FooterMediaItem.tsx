import React, { FC } from 'react';
import { MediaProps } from '../../types/footer';
import { NavLink } from 'react-router-dom';
import classes from './footerMedia.module.scss';

const FooterMediaItem: FC<MediaProps> = ({link, name, ikon, className}) => {
    return (
        <li className='footer-media__item'>
            <NavLink to={link} className={`${className} ${classes.footerMedia__ikon}`}>
                {ikon}
                <p className='visually-hidden'>{name}</p>
            </NavLink> 
        </li>
    );
};

export default FooterMediaItem;