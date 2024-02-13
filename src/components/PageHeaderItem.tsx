import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { PageHederItemProps } from '../types/pageHeader';
import '../styles/PageHeaderItem.scss';

const PageHeaderItem: FC<PageHederItemProps> = ({link, name}) => {
    return (
        <li className='main-nav__item'>
            <Link to={link}>{name}</Link> 
        </li>
    );
};

export default PageHeaderItem;