import React, { FC, useEffect, useMemo, useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { fetchComments, setCommentsPage } from '../store/action-creator/comments';
import CommentItem from './CommentItem';
import classes from '../styles/comments.module.scss';
import { CommentItemProps } from '../types/comments';

const CommentsList: FC = () => {
    const {error, comments, loading, page, limit} = useTypedSelector(state => state.comments);
    const dispatch = useDispatch();
    const pages = [1,2,3,4,5];
    const [commentInterface, setCommentInterface] = useState<CommentItemProps[]>(comments.slice(0, 2));

    useEffect(()=>{
        dispatch(fetchComments(page, limit))
    }, [page])

    useMemo(()=>{
        setCommentInterface(comments.slice(0, 2))
    }, [comments]);

    if(loading) {
        return <h2>Идет загрузка...</h2>
    }

    if(error) {
        return <h2>{error}</h2>
    }

    return (
        <ul className={classes.comments__list}>
            {commentInterface.map(comment=>
                <CommentItem body={comment.body} email={comment.email} name={comment.name} key={comment.id} id={comment.id}/>
            )}
            <div style={{display: 'flex'}}>
                {pages.map(p=>
                    <div onClick={()=>dispatch(setCommentsPage(p))} key={p} style={{padding: '5px', border: page==p  ? 'none' : '1px solid #68b738', backgroundClip: page==p  ? '#68b738' : 'white' }}>{p}</div>
                )}
            </div>
        </ul>
    );
};

export default CommentsList;