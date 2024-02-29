import { combineReducers } from "redux";
import { commentsReducer } from "./commentsReducer";
import { screenSizeReducer } from "./screenSizeReducer";

export const rootReducer = combineReducers({
    comments: commentsReducer,
    size: screenSizeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;