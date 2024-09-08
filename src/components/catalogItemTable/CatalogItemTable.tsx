import React, { FC } from 'react';
import classes from './CatalogItemTable.module.scss'
import { CatalogItemTableProps } from '../../types/catalogItem';

const CatalogItemTable: FC<CatalogItemTableProps> = ({volume, price, taste}) => {
    return (
        <table className={classes.catalogItemTable}>
            <tbody>
                <tr>
                    <td>Объем</td>
                    <td className={classes.catalogItemTable__value}>{volume} г</td>
                </tr>
                <tr>
                    <td>Вкус</td>
                    <td className={classes.catalogItemTable__value}>{taste}</td>
                </tr>
                <tr>
                    <td>Цена</td>
                    <td className={classes.catalogItemTable__value}>{price} Р</td>
                </tr>
            </tbody>
        </table>
    );
};

export default CatalogItemTable;