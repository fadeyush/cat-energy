import React, { FC, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import classes from '../styles/comments.module.scss';
import MyButton from './UI/button/MyButton';
import { buttonTypes } from '../types/button';

const AddComment: FC = () => {
    const dispatch = useDispatch();
    const emailRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const bodyRef = useRef<HTMLInputElement>(null);

    function addComment(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        const email = emailRef.current?.value;
        const name = nameRef.current?.value;
        const body = bodyRef.current?.value;
        if (name && body && email) {
            const comment = {
                name: name,
                body: body,
                email: email,
                id: Date.now()
            }
            dispatch({type: "ADD_COMMENT", payload: comment});
            nameRef!.current!.value! = '';
            emailRef!.current!.value! = '';
            bodyRef!.current!.value! = '';
        } else {
        }
      }
    return (
        <form className={classes.addComment__form}>
            <input ref={emailRef} className={classes.addComment__email} type='text'></input>
            <input ref={nameRef} className={classes.addComment__name} type='text'></input>
            <input ref={bodyRef} className={classes.addComment__body} type='text'></input>
            <MyButton colorType={buttonTypes.green} className={classes.addComment__submit} onClick={addComment}>add comment</MyButton>
        </form>
    );
};

export default AddComment;