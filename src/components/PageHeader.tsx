import React, { FC } from 'react';
import '../styles/PageHeader.scss';
import { PageHederItemProps } from '../types/pageHeader';
import PageHeaderItem from './PageHeaderItem';

const PageHeader: FC = () => {

    const pages:PageHederItemProps[] = [
        {name:'Главная', link: '/about'},
        {name:'Каталог продукции', link: '/catalog'},
        {name:'Подбор программы', link: '/program'},
    ]
    return (
        <div>
            <ul className='main-nav__list'>
                {pages.map(page =>
                    <PageHeaderItem key={page.link} link={page.link} name={page.name}/>
                )}
            </ul>
        </div>
    );
};

export default PageHeader;