import React, { FC } from 'react';
import MyButton from './UI/button/MyButton';
import { buttonTypes } from '../types/button';
import '../styles/PromoSection.scss'
import { NavLink } from 'react-router-dom';
import { Pages } from '../types/pageHeader';

const PromoSection: FC = () => {
    return (
        <section className='promo'>
            <div className='promo__wrapper'>
                <h1 className='promo__title'>Функциональное<br/> питание для котов</h1>
                <p className='promo__info'>Занялся собой? Займись котом!</p>
                <MyButton colorType={buttonTypes.green} className='promo__button'>
                    <NavLink to={Pages.program}>Подобрать программу</NavLink>
                </MyButton>
            </div>
        </section>
    );
};

export default PromoSection;