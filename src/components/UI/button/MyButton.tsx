import React, { FC } from 'react';
import classes from './MyButton.module.scss';
import { PropsProperties } from '../../../types/button';

const MyButton = ({children, colorType, className} : PropsProperties) => {
    return (
        <button className={`${colorType == 'green' ? classes.myBtnGrenn : classes.myBtnGray} ${className}`}>
            {children}
        </button>
    );
};

export default MyButton;