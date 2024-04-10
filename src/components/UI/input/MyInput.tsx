import React, { FC, forwardRef } from 'react';
import { InputProps } from '../../../types/input';
import classes from './MyInput.module.scss';

const MyInput = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {

    const rootClasses = [classes.myInput, props.className];

    if(props.isError) {
        rootClasses.push(classes.myInput__error)
    }

    return ( 
        <input onClick={props.setError ? ()=>props.setError!(false): undefined} ref={ref} className={rootClasses.join(' ')} type={props.type} placeholder={props.placeholder}/>
    )
});

export default MyInput;