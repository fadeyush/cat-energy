export interface CommentItemProps {
    name: string;
    body: string;
    email: string;
    postId: number;
}
export interface CommentsStateProps {
    comments: CommentItemProps[],
    loading: boolean,
    error: null | string,
}

export enum CommentsActionTypes {
    FETCH_COMMENTS = 'FETCH_COMMENTS',
    FETCH_COMMENTS_SUCCESS= 'FETCH_COMMENTS_SUCCESS',
    FETCH_COMMENTS_ERROR = 'FETCH_COMMENTS_ERROR'
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

export type CommentsAction = CommentsActionFetch | CommentsActionSuccess | CommentsActionErorr;