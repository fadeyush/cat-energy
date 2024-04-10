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
            localStorage.setItem('auth', 'true'); 
            return {...state, isAuth: true}
        case "LOG_OUT":
            localStorage.removeItem('auth');
            return {...state, isAuth: false}
        default:
            return state
    }
};