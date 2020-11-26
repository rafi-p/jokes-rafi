export function addFavorite (joke) {
    return {
        type: 'ADD_FAVORITE',
        payload: {
            joke
        }
    };
  };