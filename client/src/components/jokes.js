import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addFavorite} from '../store/actions/favoriteAction'
import { removeFavorite } from '../store/actions/removeFavorite'

function Jokes (props) {
    const [clicked, setClick] = useState(false)
    const dispatch = useDispatch()

    function addToFavorite (joke) {
        setClick(true)
        dispatch(addFavorite(joke));
    };

    function removeFromFavorite (joke) {
        setClick(false)
        dispatch(removeFavorite(joke));
    };


    const { joke } = props
    return (
        <div className="card mb-2 shadow-sm" style={{width:'25rem'}}>
            <div className="card-body">
                { joke.favourite === true &&
                    <i className="fas fa-star float-right" type='button' onClick={() => removeFromFavorite(joke)}></i>
                }
                { joke.favourite === false &&
                    <i className="far fa-star float-right" type='button' onClick={() => addToFavorite(joke)}></i>
                }

                <h6 className="card-subtitle mb-2 text-muted" style={{fontSize: '11px'}}>{joke.category}</h6>
                <p className="card-text" style={{fontSize: '14px', marginBottom:'0rem'}}>
                {joke.setup}
                </p>
                {/* {clicked === true && */}
                    <p className="card-text text-right text-muted" style={{fontSize: '14px', marginBottom:'0rem'}}>
                        {joke.delivery}
                    </p>
                {/* } */}
            </div>
        </div>
    )
}

export default Jokes