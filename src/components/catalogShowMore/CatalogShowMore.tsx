import React, { FC } from 'react';
import classes from './CatalogShowMore.module.scss'
import MyButton from '../UI/button/MyButton';
import { buttonTypes } from '../../types/button';

const CatalogShowMore: FC = () => {
    return (
        <div className={classes.catalogShowMore}>
            <p className={classes.catalogShowMore__plus}></p>
            <h3 className={classes.catalogShowMore__title}>Показать еще 100500 товаров</h3>
            <p className={classes.catalogShowMore__info}>На самом деле вкусов гораздо больше!</p>
            <MyButton className={classes.catalogShowMore__button} colorType={buttonTypes.gray}>Показать все</MyButton>
        </div>
    );
};

export default CatalogShowMore;