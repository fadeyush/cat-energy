import React, { FC, useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { fetchComments } from '../store/action-creator/comments';

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
        <ul>
            {comments.map(comment=>
                <li key={comment.id}>{comment.name}</li>    
            )}
        </ul>
    );
};

export default CommentsList;