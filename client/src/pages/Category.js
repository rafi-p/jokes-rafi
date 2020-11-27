import React, { useState, useEffect } from 'react'
import { useHistory, useRouteMatch, Switch, Route} from 'react-router-dom'
import {CategoryDetail} from './index.js'
import loading1 from '../assets/animation_500_khvi1rtu.gif'
import errorGif from '../assets/animation_500_khy7yy9i.gif'
import hiGif from '../assets/animation_500_khy7d11z.gif'
import { randomMemes, randomJokes } from '../store/index'
import { useSelector, useDispatch } from 'react-redux'
const categories = ['Programming', 'Miscellaneous', 'Dark', 'Pun']

function Category (props) {
    const {path, url} = useRouteMatch()
    const [clicked, setClick] = useState(false)
    const history = useHistory()
    const dispatch = useDispatch()

    const dataMeme = useSelector((state) => state.memes.data)
    const loadingMeme = useSelector((state) => state.memes.loading)
    const errorMeme = useSelector((state) => state.memes.error)

    useEffect(() => {
        dispatch(randomMemes('https://meme-api.herokuapp.com/gimme'))
    }, [dispatch])

    function toDetailCategory (category) {
        dispatch(randomJokes(`https://sv443.net/jokeapi/v2/joke/${category}?blacklistFlags=nsfw,religious,political,racist,sexist&type=twopart&idRange=0-200&amount=10`))
        dispatch(randomMemes('https://meme-api.herokuapp.com/gimme'))
        setClick(true)
        history.push(`${url}/${category}`)
    }

    if (errorMeme) {
        return (
            <section className="container pt-3 animate__animated animate__fadeIn">
                <div className='container' style={{maxWidth: '1025px'}}>
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className='text-center animate__animated animate__fadeIn'>
                            <img src={errorGif} alt="" style={{width: '350px', height: '350px', objectFit: 'contain', marginBottom: '0rem'}}/>
                            <h4>Error.</h4>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <>
            <section className="container pt-3 ">
                <div className='container' style={{maxWidth: '1025px'}}>
                    <div className="row">

                        <div className="col-6 d-flex justify-content-center" >

                            <div className="btn-group" style={{position: 'absolute'}}>
                                <label data-testid='category-title' style={{fontSize: '13px'}}>Category</label>
                                <label type="button" className="dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                </label>
                                <div className="dropdown-menu">
                                    {
                                        categories.map( (category, index) => {
                                            return <label key={index} className="btn dropdown-item" onClick={() => toDetailCategory(category)}>
                                                {category}
                                            </label>
                                        })
                                    }
                                </div>
                            </div>

                            {clicked === false &&
                                <div className='text-center align-items-center'>
                                    <img  src={hiGif} alt="" style={{width: '22rem', height: '24rem', objectFit: 'contain'}}/>
                                    <label className='font-weight-bold  animate__animated animate__fadeIn' >Choose category first</label>
                                </div>
                            }
                            {clicked === true &&
                                <Switch>
                                    <Route path={`${path}/:category`}>
                                        <CategoryDetail/>
                                    </Route>
                                </Switch>
                            }

                        </div>

                        <div className="col-6 d-flex mt-3 justify-content-center align-items-center">
                            {dataMeme && loadingMeme === false &&
                                <div className='text-center  animate__animated animate__fadeIn'>
                                    <img src={dataMeme.url} alt="" style={{width: '450px', height: '450px', objectFit: 'contain', zIndex: '-20'}}/>
                                    <h6 className='my-2 text-muted' style={{fontSize: '12px'}}>{dataMeme.title}</h6>
                                </div>
                            }
                            {loadingMeme === true &&
                                <div className='text-center  animate__animated animate__fadeIn'>
                                    <img src={loading1} alt="" style={{width: '450px', height: '450px', objectFit: 'contain', marginBottom: '-9rem'}}/>
                                    <h4>Loading</h4>
                                </div>
                            }

                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Category