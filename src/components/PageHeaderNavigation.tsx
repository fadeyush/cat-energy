import React, { FC } from 'react';
import PageHeaderLogo from './NavigationLogo';
import PageHeaderItem from './NavigationItem';
import { PageHederItemProps, Pages } from '../types/pageHeader';
import '../styles/PageHeaderNavigation.scss';
import { useLocation } from 'react-router-dom';

const PageHeaderNavigation: FC = ({}) => {
    const location = useLocation();

    const closeModal = () => {
        const navBar = document.querySelector('.main-nav__list');
        const navBarWrapper = document.querySelector('.navLogo');
        navBar?.classList.remove("main-nav__list--opened");
        navBarWrapper?.classList.remove("navLogo--opened");
    }

    const pages:PageHederItemProps[] = [
        {name:'Главная', link: Pages.about, onClick: closeModal},
        {name:'Каталог продукции', link: Pages.catalog, onClick: closeModal},
        {name:'Подбор программы', link: Pages.program, onClick: closeModal}
    ];

    const toggleModal = () => {
        const navBar = document.querySelector('.main-nav__list');
        const navBarWrapper = document.querySelector('.navLogo');
        navBar?.classList.toggle("main-nav__list--opened");
        navBarWrapper?.classList.toggle("navLogo--opened");
    }

    return (
        <div className={location.pathname === Pages.about ? `page-header__navigation page-header__navigation--about` : 'page-header__navigation'}>
            <PageHeaderLogo onClickButton={toggleModal} onClickLogo={closeModal}/>
            <ul className='main-nav__list'>
                {pages.map(page =>
                    <PageHeaderItem onClick={page.onClick} key={page.link} link={page.link} name={page.name}/>
                )}
            </ul>
        </div>
    );
};

export default PageHeaderNavigation;