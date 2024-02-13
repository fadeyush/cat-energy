import React, { FC } from 'react';
import classes from './MyButton.module.scss';
import { PropsProperties } from '../../../types/button';

const MyButton: FC<PropsProperties> = ({children, colorType, className}) => {
    return (
        <button className={`${colorType == 'green' ? classes.myBtnGrenn : classes.myBtnGray} ${className}`}>
            {children}
        </button>
    );
};

export default MyButton;