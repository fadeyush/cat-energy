import React, { FC } from 'react';
import { CommentItemProps } from '../types/comments';
import classes from '../styles/comments.module.scss';

const CommentItem: FC<CommentItemProps> = ({name, body, email}) => {
    return (
        <li className={classes.commentItem}>
            <p className={classes.commentItem__title}>{name}</p>
            <em className={classes.commentItem__author}>{email}</em>
            <p className={classes.commentItem__body}>{body}</p>
        </li>
    );
};

export default CommentItem;