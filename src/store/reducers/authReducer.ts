interface IsAuthProps {
    isAuth: boolean;
}
interface IsAuthAction {
    type: string;
    payload: number,
}

const inittialState: IsAuthProps = {
    isAuth: false
}

export const isAuthReducer = (state = inittialState, action: IsAuthAction): IsAuthProps => {
    switch (action.type) {
        case 'LOG_IN':
            return {...state, isAuth: true}
        case "LOG_OUT":
            return {...state, isAuth: false}
        default:
            return state
    }
};