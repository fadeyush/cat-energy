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
        return (<div className={classes.commentsList__wrapper}><h2>Идет загрузка...</h2></div>)
    }

    if(error) {
        return (<div className={classes.commentsList__wrapper}><h2>{error}</h2></div>);
    }

    return (
        <div className={classes.commentsList__wrapper}>
            <ul className={classes.comments__list}>
                {commentInterface.map(comment=>
                    <CommentItem body={comment.body} email={comment.email} name={comment.name} key={comment.id} id={comment.id}/>
                )}
            </ul>

            <div className={classes.pagination__list}>
                {pages.map(p=>
                    <button onClick={()=>dispatch(setCommentsPage(p))} key={p} className={page==p ? classes.pagination__buttonActive : classes.pagination__button}><p className='visually-hidden'>{p}</p></button>
                )}
            </div>
        </div>
        );
};

export default CommentsList;