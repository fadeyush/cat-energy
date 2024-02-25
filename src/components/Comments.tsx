import React, { FC, useState } from 'react';
import classes from '../styles/comments.module.scss';
import CommentsList from './CommentsList';
import AddComment from './AddComment';
import MyButton from './UI/button/MyButton';
import { buttonTypes } from '../types/button';
import MyModal from './UI/modal/MyModal';

const Comments: FC = () => {
    const [modalReview, setReview] = useState<boolean>(false);

    return (
        <section className={classes.comments}>
            <h2 className={classes.comments__title}>Отзывы наших клиентов</h2>
            <CommentsList/>
            <MyButton className={classes.comments__button} onClick={()=>setReview(true)} colorType={buttonTypes.green}>Добавить отзыв</MyButton>
            <MyModal className={classes.addComment__wrapper} visible={modalReview} setVisible={setReview}><AddComment setVisible={setReview}/></MyModal>
        </section>
    );
};

export default Comments;