import Swal from 'sweetalert2'

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

const initialState = {
    favorites: [],
    loading: false,
    error: null
}

export default function favorites(state = initialState, action) {
    switch (action.type) {
        case "ADD_FAVORITE":
            action.payload.joke.favourite = true
            const newFavorites = state.favorites.concat(action.payload.joke);
            Toast.fire({
                icon: 'success',
                title: 'Added to favorite'
              })
            return { ...state, favorites: newFavorites };
        case "REMOVE_FAVORITE":
            action.payload.joke.favourite = false
            const removeFavorites = state.favorites.filter(favorite => favorite !== action.payload.joke);
            Toast.fire({
                icon: 'success',
                title: 'Removed from favorite'
              })
            return { ...state, favorites: removeFavorites };
        default:
            return state
    }
  }