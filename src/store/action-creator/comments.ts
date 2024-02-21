import { Dispatch } from "redux";
import { CommentsAction, CommentsActionTypes } from "../../types/comments";
import axios from "axios";

export const fetchComments = () => {
    return async(dispatch: Dispatch<CommentsAction>) => {
        try {
            dispatch({type: CommentsActionTypes.FETCH_COMMENTS});

            const response = await axios.get(`https://jsonplaceholder.typicode.com/comments`, {
                params: {
                    _limit: 5,
                    _page: 1
                }
            })
            dispatch({type: CommentsActionTypes.FETCH_COMMENTS_SUCCESS, payload: response.data})
        } catch (e) {
            console.log(e)
            dispatch({type: CommentsActionTypes.FETCH_COMMENTS_ERROR, payload: 'Произошла ошибка при загрузке отзывов!'})
        }
    }
}