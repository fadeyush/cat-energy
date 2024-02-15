import React, { FC } from 'react';
import PageHeaderLogo from './NavigationLogo';
import PageHeaderItem from './NavigationItem';
import { HeaderNavigationProps, PageHederItemProps, Pages } from '../types/pageHeader';
import '../styles/PageHeaderNavigation.scss';

const PageHeaderNavigation: FC<HeaderNavigationProps> = ({location}) => {

    const pages:PageHederItemProps[] = [
        {name:'Главная', link: Pages.about},
        {name:'Каталог продукции', link: Pages.catalog},
        {name:'Подбор программы', link: Pages.program}
    ];

    const toggleModal = () => {
        const navBar = document.querySelector('.main-nav__list');
        const navBarWrapper = document.querySelector('.navLogo');
        navBar?.classList.toggle("main-nav__list--opened");
        navBarWrapper?.classList.toggle("navLogo--opened");
    }

    return (
        <div className={location === Pages.about ? `page-header__navigation page-header__navigation--about` : 'page-header__navigation'}>
            <PageHeaderLogo onClick={toggleModal}/>
            <ul className='main-nav__list'>
                {pages.map(page =>
                    <PageHeaderItem key={page.link} link={page.link} name={page.name}/>
                )}
            </ul>
        </div>
    );
};

export default PageHeaderNavigation;