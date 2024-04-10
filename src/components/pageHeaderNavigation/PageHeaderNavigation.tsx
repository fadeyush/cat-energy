import React, { FC, useState } from 'react';
import classes from './PageHeaderNavigation.module.scss';
import cl from '../pageHeaderItem/PageHeaderItem.module.scss';
import PageHeaderLogo from '../pageHeaderLogo/NavigationLogo';
import PageHeaderItem from '../pageHeaderItem/NavigationItem';
import { PageHederItemProps, Pages } from '../../types/pageHeader';
import { useLocation } from 'react-router-dom';

const PageHeaderNavigation: FC = ({}) => {
    const location = useLocation();
    const [modalNavigate, setModalNavigate] = useState<boolean>(false);

    const closeModal = () => {
        setModalNavigate(!modalNavigate)
    }

    const pages:PageHederItemProps[] = [
        {name:'Главная', link: Pages.about, onClick: closeModal},
        {name:'Каталог продукции', link: Pages.catalog, onClick: closeModal},
        {name:'Подбор программы', link: Pages.program, onClick: closeModal}
    ];

    const toggleModal = () => {
        setModalNavigate(!modalNavigate)
    }

    return (
        <div className={location.pathname === Pages.about ? `${classes.pageHeader__navigation} ${cl.pageHeader__navigation__about}` : classes.pageHeader__navigation}>
            <PageHeaderLogo onClickButton={toggleModal} onClickLogo={closeModal}/>
            <ul className={modalNavigate ? classes.mainNav__list : `${classes.mainNav__list} ${classes.mainNav__list__opened}`}>
                {pages.map(page =>
                    <PageHeaderItem onClick={page.onClick} key={page.link} link={page.link} name={page.name}/>
                )}
            </ul>
        </div>
    );
};

export default PageHeaderNavigation;