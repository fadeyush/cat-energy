import React, { FC, useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { fetchComments } from '../store/action-creator/comments';
import CommentItem from './CommentItem';
import classes from '../styles/comments.module.scss';

const CommentsList: FC = () => {
    const {error, comments, loading} = useTypedSelector(state => state.comments);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchComments())
    }, [])

    if(loading) {
        return <h2>Идет загрузка...</h2>
    }

    if(error) {
        return <h2>{error}</h2>
    }

    return (
        <ul className={classes.comments__list}>
            {comments.map(comment=>
                <CommentItem body={comment.body} email={comment.email} name={comment.name} key={comment.id} id={comment.id}/>
            )}
        </ul>
    );
};

export default CommentsList;