import React, { FC } from 'react';
import classes from './MyTextarea.module.scss';
import { TextareaProps } from '../../../types/textaerea';

const MyTextarea= React.forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {

    const rootClasses = [classes.myTextaerea, props.className];

    if(props.isError) {
        rootClasses.push(classes.myTextaerea__error)
    }

    return (
        <textarea onClick={()=>props.setError(false)} ref={ref} className={rootClasses.join(' ')} placeholder={props.placeholder}/>
    );
});

export default MyTextarea;