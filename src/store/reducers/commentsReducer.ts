import { CommentsStateProps, CommentsAction, CommentsActionTypes, CommentItemProps } from "../../types/comments";

const inittialState: CommentsStateProps = {
    comments: [],
    loading: false,
    error: null,
}

const addNewComment = (commentsArr: CommentItemProps[], newComment: CommentItemProps) => {
    commentsArr.unshift(newComment);
    return commentsArr;
}

export const commentsReducer = (state = inittialState, action: CommentsAction): CommentsStateProps => {
    switch (action.type) {
        case CommentsActionTypes.FETCH_COMMENTS:
            return {...state, loading: true}
        case CommentsActionTypes.FETCH_COMMENTS_SUCCESS:
            return {...state, loading: false, comments: action.payload}
        case CommentsActionTypes.FETCH_COMMENTS_ERROR:  
            return {...state, loading: false, error: action.payload}
        case CommentsActionTypes.ADD_COMMENT:  
            return {...state, loading: false, comments: addNewComment(state.comments, action.payload)}
        default:
            return state
    }
};