import React, { useCallback, useEffect } from 'react'
import Jokes from '../components/jokes.js'
import loading1 from '../assets/animation_500_khvi1rtu.gif'
import errorGif from '../assets/animation_500_khy7yy9i.gif'
import loadingText from '../assets/animation_500_khvpggp3.gif'
import { useSelector, useDispatch } from 'react-redux'
import { randomJokes, randomMemes } from '../store/index'


function Home (props) {

    const dispatch = useDispatch()

    const dataJokes = useSelector((state) => state.jokes.data)
    const loadingJoke = useSelector((state) => state.jokes.loading)
    const errorJoke = useSelector((state) => state.jokes.error)

    const dataMeme = useSelector((state) => state.memes.data)
    const loadingMeme = useSelector((state) => state.memes.loading)
    const errorMeme = useSelector((state) => state.memes.error)

    useEffect(() => {
        dispatch(randomJokes('https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist&type=twopart&idRange=0-200&amount=10'))
        dispatch(randomMemes('https://meme-api.herokuapp.com/gimme'))
    }, [dispatch])


    const doRandomThings = useCallback(() => {
        dispatch(randomJokes('https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist&type=twopart&idRange=0-200&amount=10'))
        dispatch(randomMemes('https://meme-api.herokuapp.com/gimme'))
    },[dispatch])

    if (errorMeme || errorJoke) {
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
        <React.Fragment>

            <section className="container pt-3 animate__animated animate__fadeIn">

                <div className='container' style={{maxWidth: '1025px'}}>
                <div className="row">
                    <div className="col-6 d-flex mt-3 justify-content-center align-items-center">
                        {dataMeme && loadingMeme === false &&
                            <div className='text-center animate__animated animate__fadeIn'>
                                <img src={dataMeme.url} alt="" style={{width: '450px', height: '450px', objectFit: 'contain'}}/>
                                <h6 className='my-2 text-muted' style={{fontSize: '12px'}}>{dataMeme.title}</h6>
                            </div>

                        }
                        {loadingMeme === true &&
                            <div className='text-center animate__animated animate__fadeIn'>
                                <img src={loading1} alt="" style={{width: '450px', height: '450px', objectFit: 'contain', marginBottom: '-9rem'}}/>
                                <h4>Loading</h4>
                            </div>
                        }

                    </div>

                    <div className="col-6 d-flex justify-content-center" >
                        <div style={{width: '25rem', height: '28rem'}}>
                        <label className='font-weight-bold' data-testid='jokes-title' >Jokes Quote</label>

                            <div onClick={() => doRandomThings()} type='button' className='float-right text-white randomHover' style={{fontSize: '13px'}}>
                            New Jokes
                            <i className="fas fa-sync-alt mx-2" ></i>
                            </div>


                            <div className="d-flex flex-wrap align-items-center justify-content-center scrollbar scrollbar-black bordered-black square thin " style={{width: '26.5rem', height: '28rem', overflowY: 'auto'}}>
                            {dataJokes && dataJokes.jokes && loadingJoke === false &&
                                dataJokes.jokes.map(joke => {
                                joke.favourite = false
                                return <Jokes joke={joke} key={joke.id}/>
                                })
                            }
                            {loadingJoke === true &&

                                <div className='text-center animate__animated animate__fadeIn'>
                                    <img src={loadingText} alt="" style={{width: '24rem', height: '26rem', objectFit: 'contain', marginBottom: '-3.5rem'}}/>
                                    <h4>Loading</h4>
                                </div>
                            }
                            </div>
                        </div>
                    </div>
                </div>
                </div>


            </section>
        </React.Fragment>
    )
}

export default Home