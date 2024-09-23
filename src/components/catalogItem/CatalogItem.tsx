import React, { FC } from 'react';
import classes from './CatalogItem.module.scss';
import chicken from '../../assets/img/content/chicken-small-desktop@2x.png';
import fish from '../../assets/img/content/fish-small-desktop@2x.png';
import buckwheat from '../../assets/img/content/buckwheat-small-desktop@2x.png';
import rice from '../../assets/img/content/rice-small-desktop@2x.png';
import { CatalogItemProps } from '../../types/catalogItem';
import CatalogItemTable from '../catalogItemTable/CatalogItemTable';
import MyButton from '../UI/button/MyButton';
import { buttonTypes } from '../../types/button';

const CatalogItem: FC<CatalogItemProps> = ({title, table, imgSrc}) => {
    return (
        <li className={classes.catalogItem}>
            <div className={classes.catalogItem__wrapper}>
                <img className={classes.catalogItem__img} src={imgSrc === 'chicken' ? chicken : imgSrc === 'fish' ? fish : imgSrc === 'buckwheat' ? buckwheat : rice}/>
                <div className={classes.catalogItem__content}>
                    <h3 className={classes.catalogItem__title}>Cat Energy {title}</h3>
                    <CatalogItemTable volume={table.volume} price={table.price} taste={table.taste}/>
                </div>
            </div>
            <MyButton className={classes.catalogItem__button} colorType={buttonTypes.green}>Заказать</MyButton>
        </li>
    );
};

export default CatalogItem;