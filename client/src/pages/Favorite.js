import React from 'react'
import { useSelector } from 'react-redux'
import Jokes from '../components/jokes.js'
import loading1 from '../assets/undraw_Faq_re_31cw.svg'

function Favorite (props) {
    const favorites = useSelector((state) => state.favorites)
    return (
        <>
            <div className='row d-flex justify-content-center mt-3' style={{marginRight: '0px'}}>
                <div className="col-6 d-flex justify-content-center" style={{    display: 'flex!important'}} >
                    <div style={{width: '25rem', height: '28rem'}}>
                        <label className='font-weight-bold' >Favorite</label>
                        <div className=" flex-wrap align-items-center  justify-content-center scrollbar scrollbar-black bordered-black square thin" style={{width: '26.5rem', height: '28rem', overflowY: 'auto'}}>
                        {favorites.length > 0 &&
                            favorites.map(favorite => {
                            return <Jokes joke={favorite} key={favorite.id}/>
                            })
                        }

                        {favorites.length === 0 &&
                            <div className='text-center'>
                                <img src={loading1} alt="" style={{width: '24rem', height: '26rem', objectFit: 'contain', marginBottom: '-3rem'}}/>
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