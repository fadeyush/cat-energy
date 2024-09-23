import React from 'react';
import classes from '../catalogItem/CatalogItem.module.scss';
import { CatalogItemProps } from '../../types/catalogItem';
import CatalogItem from '../catalogItem/CatalogItem';
import CatalogShowMore from '../catalogShowMore/CatalogShowMore';

const CatalogList = () => {
    const catalogList: CatalogItemProps[] = [
        {id: 1, title: 'PRO 500 г', table: {volume: '500', taste: 'Курица', price: '700'}, imgSrc: 'chicken'},
        {id: 2, title: 'PRO 1000 г', table: {volume: '1000', taste: 'Курица', price: '1000'}, imgSrc: 'chicken'},
        {id: 3, title: 'PRO 500 г', table: {volume: '500', taste: 'Рыба', price: '500'}, imgSrc: 'fish'},
        {id: 4, title: 'PRO 1000 г', table: {volume: '1000', taste: 'Рыба', price: '1000'}, imgSrc: 'fish'},
        {id: 5, title: 'SLIM 500 г', table: {volume: '500', taste: 'Гречка', price: '400'}, imgSrc: 'buckwheat'},
        {id: 6, title: 'SLIM 1000 г', table: {volume: '1000', taste: 'Гречка', price: '700'}, imgSrc: 'buckwheat'},
        {id: 7, title: 'SLIM 500 г', table: {volume: '500', taste: 'Рис', price: '500'}, imgSrc: 'rice'},
    ]

    return (
        <ul className={classes.catalogList}>
            {catalogList.map(item => 
                <CatalogItem id={item.id} key={item.id} title={item.title} table={item.table} imgSrc={item.imgSrc}/>
            )}
            <li><CatalogShowMore/></li>
        </ul>
    );
};

export default CatalogList;