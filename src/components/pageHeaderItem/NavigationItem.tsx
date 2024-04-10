import React, { FC } from 'react';
import classes from './PageHeaderItem.module.scss'
import { NavLink } from 'react-router-dom';
import { PageHederItemProps } from '../../types/pageHeader';

const PageHeaderItem: FC<PageHederItemProps> = ({link, name, onClick}) => {
    return (
        <li className={classes.mainNav__item}>
            <NavLink onClick={onClick}
                    className={({ isActive }) => isActive ? `${classes.mainNav__item__active}` : undefined}
                    to={link}>
                {name}
            </NavLink> 
        </li>
    );
};

export default PageHeaderItem;