export interface CommentItemProps {
    name: string;
    body: string;
    email: string;
    id: number;
    isUser: boolean;
}
export interface CommentsStateProps {
    comments: CommentItemProps[],
    loading: boolean,
    error: null | string,
    page: number;
    limit: number;
}

export enum CommentsActionTypes {
    FETCH_COMMENTS = 'FETCH_COMMENTS',
    FETCH_COMMENTS_SUCCESS= 'FETCH_COMMENTS_SUCCESS',
    FETCH_COMMENTS_ERROR = 'FETCH_COMMENTS_ERROR',
    SET_COMMENTS_PAGE = 'SET_COMMENTS_PAGE',
    ADD_COMMENT = 'ADD_COMMENT',
    DELETE_COMMENT = 'DELETE_COMMENT'
}

interface CommentsActionFetch {
    type: CommentsActionTypes.FETCH_COMMENTS;
}

interface CommentsActionSuccess {
    type: CommentsActionTypes.FETCH_COMMENTS_SUCCESS;
    payload: CommentItemProps[],
}

interface CommentsActionErorr {
    type: CommentsActionTypes.FETCH_COMMENTS_ERROR;
    payload: string,
}

interface SetTodoPage {
    type: CommentsActionTypes.SET_COMMENTS_PAGE;
    payload: number;
}

interface AddComment {
    type: CommentsActionTypes.ADD_COMMENT;
    payload: CommentItemProps,
}

interface DeleteComment {
    type: CommentsActionTypes.DELETE_COMMENT;
    payload: number,
}

export type CommentsAction = CommentsActionFetch | CommentsActionSuccess | CommentsActionErorr | SetTodoPage | AddComment | DeleteComment;

export interface AddCommentsProps {
    setVisible: (e: boolean) => void;
    visible: boolean;
}

export interface DeleteCommentProps {
    commentId: number;
    setVisible: (e: boolean) => void;
}