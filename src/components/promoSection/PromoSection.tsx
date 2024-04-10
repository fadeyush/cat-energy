import React, { FC } from 'react';
import classes from './PromoSection.module.scss';
import MyButton from '../UI/button/MyButton';
import { buttonTypes } from '../../types/button';
import { NavLink } from 'react-router-dom';
import { Pages } from '../../types/pageHeader';

const PromoSection: FC = () => {
    return (
        <section className={classes.promo}>
            <div className={classes.promo__wrapper}>
                <h1 className={classes.promo__title}>Функциональное<br/> питание для котов</h1>
                <p className={classes.promo__info}>Занялся собой? Займись котом!</p>
                <NavLink className={classes.promo__button_link} to={Pages.program}>
                    <MyButton colorType={buttonTypes.green} className={classes.promo__button}>Подобрать программу</MyButton>
                </NavLink>
            </div>
        </section>
    );
};

export default PromoSection;