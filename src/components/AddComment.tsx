import React, { FC, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import classes from '../styles/comments.module.scss';
import MyButton from './UI/button/MyButton';
import { buttonTypes } from '../types/button';
import MyModal from './UI/modal/MyModal';
import { AddCommentsProps } from '../types/comments';
import MyInput from './UI/input/MyInput';

const AddComment: FC<AddCommentsProps> = ({setVisible}) => {
    const dispatch = useDispatch();
    const emailRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const bodyRef = useRef<HTMLTextAreaElement>(null);
    const [modalError, setError] = useState<boolean>(false);
    const [emailErrorInput, setEmailErrorInput] = useState<boolean>(false);
    const [nameErrorInput, setNameErrorInput] = useState<boolean>(false);

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
            setVisible(false);
        } else {
            if(!email) {
                setEmailErrorInput(true)
            }
            if(!name) {
                setNameErrorInput(true)
            }
            setError(true);
        }
    }
    return (
        <form className={classes.addComment__form}>
            <MyInput setError={setEmailErrorInput} isError={emailErrorInput} ref={emailRef} className={classes.addComment__email} type='email' placeholder='Ваш email*'/>
            <MyInput setError={setNameErrorInput} isError={nameErrorInput} ref={nameRef} className={classes.addComment__name} type='text' placeholder='Заголовок*'/>
            <textarea ref={bodyRef} className={classes.addComment__body} placeholder='Текст*'></textarea>
            <MyButton colorType={buttonTypes.green} className={classes.addComment__submit} onClick={addComment}>Добавить</MyButton>
            <MyModal visible={modalError} setVisible={setError}>Пожалуйста, заполните все поля формы!</MyModal>
        </form>
    );
};

export default AddComment;