import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { PageHederItemProps } from '../types/pageHeader';
import '../styles/PageHeaderItem.scss';

const PageHeaderItem: FC<PageHederItemProps> = ({link, name}) => {
    return (
        <li className='main-nav__item'>
            <NavLink 
            className={({ isActive }) => isActive ? `main-nav__item--active` : undefined}
            to={link}>
                {name}
            </NavLink> 
        </li>
    );
};

export default PageHeaderItem;