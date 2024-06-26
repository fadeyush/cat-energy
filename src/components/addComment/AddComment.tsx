import React, { FC, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import classes from './AddComment.module.scss';
import MyButton from '../UI/button/MyButton';
import { buttonTypes } from '../../types/button'; 
import MyModal from '../UI/modal/MyModal';
import { AddCommentsProps, CommentItemProps } from '../../types/comments';
import MyInput from '../UI/input/MyInput';
import MyTextarea from '../UI/textarea/MyTextarea';

const AddComment: FC<AddCommentsProps> = ({setVisible, visible}) => {
    const dispatch = useDispatch();
    const emailRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const bodyRef = useRef<HTMLTextAreaElement>(null);
    const [modalError, setError] = useState<boolean>(false);
    const [emailErrorInput, setEmailErrorInput] = useState<boolean>(false);
    const [nameErrorInput, setNameErrorInput] = useState<boolean>(false);
    const [bodyErrorInput, setBodyErrorInput] = useState<boolean>(false);

    function addComment(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        const email = emailRef.current?.value;
        const name = nameRef.current?.value;
        const body = bodyRef.current?.value;
        if (name && body && email) {
            const comment: CommentItemProps = {
                name: name,
                body: body,
                email: email,
                id: Date.now(),
                isUser: true
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
            if(!body) {
                setBodyErrorInput(true)
            }
            setError(true);
        }
    }

    if (!visible && nameRef.current && emailRef.current &&  bodyRef.current) {
        nameRef!.current!.value! = '';
        emailRef!.current!.value! = '';
        bodyRef!.current!.value! = '';
    }

    return (
        <form className={classes.addComment__form}>
            <MyInput setError={setEmailErrorInput} isError={emailErrorInput} ref={emailRef} className={classes.addComment__email} type='email' placeholder='Ваш email*'/>
            <MyInput setError={setNameErrorInput} isError={nameErrorInput} ref={nameRef} className={classes.addComment__name} type='text' placeholder='Заголовок*'/>
            <MyTextarea setError={setBodyErrorInput} isError={bodyErrorInput} ref={bodyRef} className={classes.addComment__body} placeholder='Текст*'/>
            <MyButton colorType={buttonTypes.green} className={classes.addComment__submit} onClick={addComment}>Добавить</MyButton>
            <MyModal visible={modalError} setVisible={setError}>Пожалуйста, заполните все поля формы!</MyModal>
        </form>
    );
};

export default AddComment;