interface screenSizeProps {
    size: number;
}

interface actionProps {
    type: string;
    payload: number
}

const inittialState: screenSizeProps = {
    size: 0,
}

const ADD_SIZE = 'ADD_SIZE';

export const screenSizeReducer = (state = inittialState, action:actionProps) => {
    switch (action.type) {
        case ADD_SIZE:
            state.size = action.payload;
            return state;
        default:
            return state
    }
};
