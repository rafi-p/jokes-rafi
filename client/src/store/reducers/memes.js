const initialState = {
    data: {},
    loading: false,
    error: null
}

export default function memes(state = initialState, action) {
    switch (action.type) {
        case 'SET_DATA_MEMES':
            return { ...state, data: action.payload };
        case 'SET_LOADING_MEMES':
            return { ...state, loading: action.payload };
        case 'SET_ERROR_MEMES':
            return { ...state, error: action.payload };
        default:
            return state
    }
  }