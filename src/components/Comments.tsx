import React, { FC } from 'react';
import classes from '../styles/comments.module.scss';
import CommentsList from './CommentsList';

const Comments: FC = () => {
    return (
        <section className={classes.comments}>
            <h2 className={classes.comments__title}>Отзывы наших клиентов</h2>
            <CommentsList/>
        </section>
    );
};

export default Comments;