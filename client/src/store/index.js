import { createStore } from 'redux'

const initialState = {
    favorites: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_FAVORITE":
            action.payload.joke.favourite = true
            const newFavorites = state.favorites.concat(action.payload.joke);
          return { ...state, favorites: newFavorites };
        case "REMOVE_FAVORITE":
            action.payload.joke.favourite = false
            const removeFavorites = state.favorites.filter(favorite => favorite !== action.payload.joke);
            return { ...state, favorites: removeFavorites };
        default:
          return state;
      }
}

const store = createStore(reducer)

export default store