export interface CommentItemProps {
    name: string;
    body: string;
    email: string;
    id: number;
}
export interface CommentsStateProps {
    comments: CommentItemProps[],
    loading: boolean,
    error: null | string,
}

export enum CommentsActionTypes {
    FETCH_COMMENTS = 'FETCH_COMMENTS',
    FETCH_COMMENTS_SUCCESS= 'FETCH_COMMENTS_SUCCESS',
    FETCH_COMMENTS_ERROR = 'FETCH_COMMENTS_ERROR',
    ADD_COMMENT = 'ADD_COMMENT',
}

interface CommentsActionFetch {
    type: CommentsActionTypes.FETCH_COMMENTS;
}

interface CommentsActionSuccess {
    type: CommentsActionTypes.FETCH_COMMENTS_SUCCESS;
    payload: any[],
}

interface CommentsActionErorr {
    type: CommentsActionTypes.FETCH_COMMENTS_ERROR;
    payload: string,
}

interface AddComment {
    type: CommentsActionTypes.ADD_COMMENT;
    payload: CommentItemProps,
}

export type CommentsAction = CommentsActionFetch | CommentsActionSuccess | CommentsActionErorr | AddComment;

export interface AddCommentsProps {
    setVisible: (e: boolean) => void;
    visible: boolean;
}