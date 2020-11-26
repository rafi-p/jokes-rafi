import { combineReducers } from 'redux'
import favorites from './favorites'
import jokes from './jokes'
import memes from './memes'

export default combineReducers({
    favorites,
    jokes,
    memes
})