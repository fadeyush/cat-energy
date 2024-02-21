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
        return <h1>Идет загрузка...</h1>
    }

    if(error) {
        return <h1>{error}</h1>
    }

    return (
        <ul className={classes.comments__list}>
            {comments.map(comment=>
                <CommentItem body={comment.body} email={comment.email} name={comment.name} key={comment.postId} postId={comment.postId}/>
            )}
        </ul>
    );
};

export default CommentsList;