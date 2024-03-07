import React, { FC, useState } from 'react';
import { CommentItemProps } from '../types/comments';
import classes from '../styles/comments.module.scss';
import { useDispatch } from 'react-redux';
import MyModal from './UI/modal/MyModal';
import DeleteComment from './DeleteComment';

const CommentItem: FC<CommentItemProps> = ({name, body, email, isUser, id}) => {
    const [modalDeleteComment, setDeleteComment] = useState<boolean>(false);
    return (
        <li className={classes.commentItem}>
            <p className={classes.commentItem__title}>{name}</p>
            <em className={classes.commentItem__author}>{email}</em>
            <p className={classes.commentItem__body}>{body}</p>

            {isUser
             ?
             <div>
                <button onClick={()=>setDeleteComment(true)} className={classes.commentItem__deleteActive}><span></span></button>
                <MyModal visible={modalDeleteComment} setVisible={setDeleteComment}>
                    <DeleteComment setVisible={setDeleteComment} commentId={id}/>
                </MyModal>
             </div>
             :
             ''
            }
           
        </li>
    );
};

export default CommentItem;