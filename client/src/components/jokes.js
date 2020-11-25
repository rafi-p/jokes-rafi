import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addFavorite} from '../store/actions/favoriteAction'
import { removeFavorite } from '../store/actions/removeFavorite'

function Jokes (props) {
    const [clicked, setClick] = useState(false)
    const dispatch = useDispatch()

    function isClick() {
        if(clicked === true) {
            setClick(false)
        } else {
            setClick(true)
        }
    }

    function addToFavorite (joke) {
        dispatch(addFavorite(joke));
    };

    function removeFromFavorite (joke) {
        dispatch(removeFavorite(joke));
    };


    const { joke } = props
    return (
        <div onClick={() => isClick()} className="card mb-2 shadow-sm" type='button' style={{width:'25rem'}}>
            <div className="card-body">
                { joke.favourite === true &&
                    <button className='float-right btn btn-danger' onClick={() => removeFromFavorite(joke)}>Add Fav</button>
                }
                { joke.favourite === false &&
                    <button className='float-right btn btn-primary' onClick={() => addToFavorite(joke)}>Add Fav</button>
                }

                <h6 className="card-subtitle mb-2 text-muted" style={{fontSize: '11px'}}>{joke.category}</h6>
                <p className="card-text" style={{fontSize: '14px', marginBottom:'0rem'}}>
                {joke.setup}
                </p>
                {clicked === true &&
                    <p className="card-text text-right text-muted" style={{fontSize: '14px', marginBottom:'0rem'}}>
                        {joke.delivery}
                    </p>
                }
            </div>
        </div>
    )
}

export default Jokes