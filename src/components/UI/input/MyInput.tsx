import React from 'react';
import { InputProps } from '../../../types/input';
import classes from './MyInput.module.scss';

const MyInput = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {

    const rootClasses = [classes.myInput, props.className];

    if(props.isError) {
        rootClasses.push(classes.myInput__error)
    }

    return ( 
        ref ?
        <input onClick={props.setError ? ()=>props.setError!(false): undefined} ref={ref} className={rootClasses.join(' ')} type={props.type} placeholder={props.placeholder}/>
        :
        <input onClick={props.setError ? ()=>props.setError!(false): undefined} onChange={props.onChange} value={props.value || ''} className={rootClasses.join(' ')} type={props.type} placeholder={props.placeholder}/>
    )
});

export default MyInput;