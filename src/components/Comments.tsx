import React, { FC } from 'react';
import classes from '../styles/comments.module.scss';
import CommentsList from './CommentsList';
import AddComment from './AddComment';

const Comments: FC = () => {
    return (
        <section className={classes.comments}>
            <h2 className={classes.comments__title}>Отзывы наших клиентов</h2>
            <CommentsList/>
            <AddComment/>
        </section>
    );
};

export default Comments;