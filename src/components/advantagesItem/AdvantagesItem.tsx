import React, { FC } from 'react';
import classes from './AdvantagesItem.module.scss';
import { AdvantagesItemsProps } from '../../types/advantage';


const AdvantagesItem: FC<AdvantagesItemsProps> = ({info, className, index}) => {
    return (
        <li className={`${classes.advantage__item } ${classes[className]}`}>
            <span className={classes.advantage__index}>{index}</span>
            {info}
        </li>
    );
};

export default AdvantagesItem;