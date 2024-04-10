import React, { FC } from 'react';
import classes from './PageHeaderItem.module.scss'
import { NavLink } from 'react-router-dom';
import { PageHederItemProps } from '../../types/pageHeader';

const PageHeaderItem: FC<PageHederItemProps> = ({link, name, onClick}) => {
    return (
        <li className={classes.mainNav__item}>
            {
                link ?
                <NavLink onClick={onClick}
                        className={({ isActive }) => isActive ? `${classes.mainNav__item__active}` : undefined}
                        to={link}>
                    {name}
                </NavLink> 
                :
                <p onClick={onClick} className={classes.button__logOut}>{name}</p>
            }
        </li>
    );
};

export default PageHeaderItem;