import React from 'react'
import { useSelector } from 'react-redux'
import Jokes from '../components/jokes.js'

function Favorite (props) {
    const favorites = useSelector((state) => state.favorites)
    return (
        <>
            <h1>ini favorite</h1>

            <div className="col-6 d-flex justify-content-center" >
                <div style={{width: '25rem', height: '28rem'}}>
                    <div className="d-flex flex-wrap align-items-center justify-content-center" style={{width: '26.5rem', height: '28rem', overflowY: 'auto'}}>
                    {
                        favorites.map(favorite => {
                        return <Jokes joke={favorite} key={favorite.id}/>
                        })
                    }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Favorite