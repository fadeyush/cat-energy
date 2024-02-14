import React, { FC } from 'react';
import '../styles/PageHeader.scss';
import { PageHederItemProps } from '../types/pageHeader';
import PageHeaderItem from './PageHeaderItem';
import PageHeaderLogo from './PageHeaderLogo';

const PageHeader: FC = () => {

    const pages:PageHederItemProps[] = [
        {name:'Главная', link: '/about'},
        {name:'Каталог продукции', link: '/catalog'},
        {name:'Подбор программы', link: '/program'}
    ];

    const toggleModal = () => {
        const navBar = document.querySelector('.main-nav__list');
        const navBarWrapper = document.querySelector('.navLogo');
        navBar?.classList.toggle("main-nav__list--opened");
        navBarWrapper?.classList.toggle("navLogo--opened");
    }

    return (
        <div className='page-header'>
            <PageHeaderLogo onClick={toggleModal}/>
            <ul className='main-nav__list'>
                {pages.map(page =>
                    <PageHeaderItem key={page.link} link={page.link} name={page.name}/>
                )}
            </ul>
        </div>
    );
};

export default PageHeader;