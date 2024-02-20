import React, { FC } from 'react';
import classes from '../styles/advantage.module.scss';
import { AdvantagesItemsProps } from '../types/advantage';


const AdvantagesItem: FC<AdvantagesItemsProps> = ({info, className}) => {
    return (
        <li className={`${classes.advantage__item } ${classes[className]}`}>
            {info}
        </li>
    );
};

export default AdvantagesItem;