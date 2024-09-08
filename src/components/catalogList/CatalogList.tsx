import React from 'react';
import classes from './CatalogList.module.scss'
import { CatalogItemProps } from '../../types/catalogItem';
import CatalogItem from '../catalogItem/CatalogItem';

const CatalogList = () => {
    const catalogList: CatalogItemProps[] = [
        {title: 'Cat Energy PRO 500 г', table: {volume: '500', taste: 'Курица', price: '700'}, imgSrc: 'chicken'},
        {title: 'Cat Energy PRO 1000 г', table: {volume: '1000', taste: 'Курица', price: '1000'}, imgSrc: 'chicken'},
        {title: 'Cat Energy PRO 500 г', table: {volume: '500', taste: 'Рыба', price: '500'}, imgSrc: 'fish'},
        {title: 'Cat Energy PRO 1000 г', table: {volume: '1000', taste: 'Рыба', price: '1000'}, imgSrc: 'fish'},
        {title: 'Cat Energy SLIM 500 г', table: {volume: '500', taste: 'Гречка', price: '400'}, imgSrc: 'buckwheat'},
        {title: 'Cat Energy SLIM 1000 г', table: {volume: '1000', taste: 'Гречка', price: '700'}, imgSrc: 'buckwheat'},
        {title: 'Cat Energy SLIM 500 г', table: {volume: '500', taste: 'Рис', price: '500'}, imgSrc: 'rice'},
    ]

    return (
        <ul className={classes.catalogList}>
            {catalogList.map(item => 
                <CatalogItem title={item.title} table={item.table} imgSrc={item.imgSrc}/>
            )}
        </ul>
    );
};

export default CatalogList;