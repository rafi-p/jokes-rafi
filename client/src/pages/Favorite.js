import React from 'react'
import { useSelector } from 'react-redux'
import Jokes from '../components/jokes.js'
import playGif from '../assets/animation_500_khy7a2c5.gif'

function Favorite (props) {
    const favorites = useSelector((state) => state.favorites.favorites)
    return (
        <>
            <div className='row d-flex justify-content-center mt-3  animate__animated animate__fadeIn' style={{marginRight: '0px'}}>
                <div className="col-6 d-flex justify-content-center" style={{    display: 'flex!important'}} >
                    <div style={{width: '25rem', height: '28rem'}}>
                        <label data-testid='favorite-title' className='font-weight-bold' >Favorite</label>
                        <div className=" flex-wrap align-items-center  justify-content-center scrollbar scrollbar-black bordered-black square thin" style={{width: '26.5rem', height: '28rem', overflowY: 'auto'}}>
                        {favorites.length > 0 &&
                            favorites.map(favorite => {
                            return <Jokes joke={favorite} key={favorite.id}/>
                            })
                        }

                        {favorites.length === 0 &&
                            <div className='text-center  animate__animated animate__fadeIn mt-4'>
                                 <img  src={playGif} alt="" style={{width: '18rem', height: '20rem', objectFit: 'contain'}}/><br></br>
                                <label className='font-weight-bold' >No Favorites yet</label>
                            </div>
                        }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Favorite