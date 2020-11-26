const initialState = {
    data: {},
    loading: false,
    error: null
}

export default function jokes(state = initialState, action) {
    switch (action.type) {
        case 'SET_DATA_JOKES':
            return { ...state, data: action.payload };
        case 'SET_LOADING_JOKES':
            return { ...state, loading: action.payload };
        case 'SET_ERROR_JOKES':
            return { ...state, error: action.payload };
        default:
            return state
    }
  }