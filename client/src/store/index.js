import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers/index'


export const randomJokes = (urlRandom) => {
    return (dispatch) => {
        dispatch({ type: 'SET_LOADING_JOKES', payload: true })
        fetch(urlRandom, {
            method: 'GET'
          })
            .then(res => {
              if(res.ok) {
                return res.json()
              } else {
                return Promise.reject({
                  status: res.status,
                  statusText: res.statusText
                })
              }
            })
            .then(data => {
              dispatch({ type: 'SET_DATA_JOKES', payload: data })
            })
            .catch((error) => {
              console.error('Error:', error);
              dispatch({ type: 'SET_ERROR_JOKES', payload: error })
            })
            .finally(() => {
                dispatch({ type: 'SET_LOADING_JOKES', payload: false })
              });
    }
  }

  export const randomMemes = (urlRandom) => {
    return (dispatch) => {
        dispatch({ type: 'SET_LOADING_MEMES', payload: true })
        fetch(urlRandom, {
            method: 'GET'
          })
            .then(res => {
              if(res.ok) {
                return res.json()
              } else {
                return Promise.reject({
                  status: res.status,
                  statusText: res.statusText
                })
              }
            })
            .then(data => {
              dispatch({ type: 'SET_DATA_MEMES', payload: data })
            })
            .catch((error) => {
              console.error('Error:', error);
              dispatch({ type: 'SET_ERROR_MEMES', payload: error })
            })
            .finally(() => {
                dispatch({ type: 'SET_LOADING_MEMES', payload: false })
              });
    }
  }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
)

export default store