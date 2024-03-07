import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import MyButton from './UI/button/MyButton';
import { buttonTypes } from '../types/button';
import classes from '../styles/comments.module.scss';

interface DeleteCommentProps {
    commentId: number;
    setVisible: (e: boolean) => void;
}

const DeleteComment: FC<DeleteCommentProps> = ({commentId, setVisible}) => {
    const dispatch = useDispatch();

    function removeCustomer(id:number) {
        dispatch({type: "DELETE_COMMENT", payload: id});
        setVisible(false);
    }

    return (
        <div>
            <p className={classes.deleteComment__info}>Вы действительно хотите удалить свой отзыв?</p>
            <MyButton onClick={()=>removeCustomer(commentId)} className={classes.deleteComment__delete} colorType={buttonTypes.green}>Удалить</MyButton>
            <MyButton onClick={()=>setVisible(false)} className={classes.deleteComment__cancel} colorType={buttonTypes.gray}>Отменить</MyButton>
        </div>
    );
};

export default DeleteComment;