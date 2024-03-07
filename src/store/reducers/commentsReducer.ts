import { CommentsStateProps, CommentsAction, CommentsActionTypes } from "../../types/comments";

const inittialState: CommentsStateProps = {
    comments: [],
    loading: false,
    error: null,
    page: 1,
    limit: 10,
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
            return {...state, loading: false, comments: [action.payload, ...state.comments]}
        case CommentsActionTypes.SET_COMMENTS_PAGE:  
            return {...state, page: action.payload }
        case CommentsActionTypes.DELETE_COMMENT:
            return {...state, comments: state.comments.filter(comment => comment.id !== action.payload) }
        default:
            return state
    }
};