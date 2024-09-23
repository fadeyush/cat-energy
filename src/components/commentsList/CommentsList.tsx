import React, { FC, useEffect, useMemo, useState } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { fetchComments, setCommentsPage } from '../../store/action-creator/comments';
import CommentItem from '../commentItem/CommentItem';
import classes from './CommentsList.module.scss';
import { CommentItemProps } from '../../types/comments';
import MyLoader from '../UI/loader/MyLoader';

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
        return (<div className={classes.commentsList__wrapper}><MyLoader/></div>)
    }

    if(error) {
        return (<div className={classes.commentsList__wrapper}><h2>{error}</h2></div>);
    }

    return (
        <div className={classes.commentsList__wrapper}>
            <ul className={classes.comments__list}>
                {commentInterface.map(comment=>
                    <CommentItem isUser={comment.isUser} body={comment.body} email={comment.email} name={comment.name} key={comment.id} id={comment.id}/>
                )}
            </ul>

            <ul className={classes.pagination__list}>
                {pages.map(p=>
                    <li>
                        <button onClick={()=>dispatch(setCommentsPage(p))} key={p} className={page==p ? classes.pagination__buttonActive : classes.pagination__button}><p className='visually-hidden'>{p}</p></button>
                    </li>
                )}
            </ul>
        </div>
        );
};

export default CommentsList;