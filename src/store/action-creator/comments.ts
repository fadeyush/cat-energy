import { Dispatch } from "redux";
import { CommentsAction, CommentsActionTypes } from "../../types/comments";
import axios from "axios";

export const fetchComments = (page = 1, limit = 10) => {
    return async(dispatch: Dispatch<CommentsAction>) => {
        try {
            dispatch({type: CommentsActionTypes.FETCH_COMMENTS});

            const response = await axios.get(`https://jsonplaceholder.typicode.com/comments`, {
                params: {
                    _limit: limit,
                    _page: page
                }
            })
            dispatch({type: CommentsActionTypes.FETCH_COMMENTS_SUCCESS, payload: response.data})
        } catch (e) {
            console.log(e)
            dispatch({type: CommentsActionTypes.FETCH_COMMENTS_ERROR, payload: 'Произошла ошибка при загрузке отзывов!'})
        }
    }
}

export function setCommentsPage(page: number): CommentsAction {
    return {type: CommentsActionTypes.SET_COMMENTS_PAGE, payload: page}
}