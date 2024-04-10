import { combineReducers } from "redux";
import { commentsReducer } from "./commentsReducer";
import { screenSizeReducer } from "./screenSizeReducer";
import { isAuthReducer } from "./authReducer";

export const rootReducer = combineReducers({
    comments: commentsReducer,
    size: screenSizeReducer,
    isAuth: isAuthReducer,
});

export type RootState = ReturnType<typeof rootReducer>;