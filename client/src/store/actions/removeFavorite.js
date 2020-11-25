export function removeFavorite (joke) {
    return {
        type: 'REMOVE_FAVORITE',
        payload: {
            joke
        }
    };
  };