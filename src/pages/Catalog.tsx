import React, { FC } from 'react';
import classes from '../styles/Catalog.module.scss'
import CatalogList from '../components/catalogList/CatalogList';

const Catalog: FC = () => {
    return (
        <main className={classes.catalog__wrappper}>
            <h1 className={classes.catalogTitle}>Каталог продукции</h1>
            <CatalogList/>
        </main>
    );
};

export default Catalog;