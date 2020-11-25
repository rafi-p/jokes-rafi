import React, { useCallback } from 'react'
import Jokes from '../components/jokes.js'
import loading1 from '../assets/animation_500_khvi1rtu.gif'
import loadingText from '../assets/animation_500_khvpggp3.gif'
import useFetch from '../helpers/useFetcher'
import { Switch, Route, Link } from 'react-router-dom'

function Home (props) {
    const [dataJokes, loadingJoke, randomJoke] = useFetch('https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist&type=twopart&idRange=0-200&amount=10')

    const [dataMeme, loadingMeme, randomMeme] = useFetch('https://meme-api.herokuapp.com/gimme')


    const doRandomThings = useCallback(() => {
        randomJoke('https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist&type=twopart&idRange=0-200&amount=10')
        randomMeme('https://meme-api.herokuapp.com/gimme')
    },[randomJoke, randomMeme])

    return (
        <React.Fragment>

            <section className="container pt-3">
                <div className='container' style={{maxWidth: '1025px'}}>
                <div className="row">
                    <div className="col-6 d-flex mt-3 justify-content-center align-items-center">
                        {dataMeme && loadingMeme === false &&
                            <div className='text-center'>
                                <img src={dataMeme.url} alt="" style={{width: '450px', height: '450px', objectFit: 'contain'}}/>
                                <h6 className='my-2 text-muted' style={{fontSize: '12px'}}>{dataMeme.title}</h6>
                            </div>

                        }
                        {loadingMeme === true &&
                            <div className='text-center'>
                                <img src={loading1} alt="" style={{width: '450px', height: '450px', objectFit: 'contain', marginBottom: '-9rem'}}/>
                                <h4>Loading</h4>
                            </div>
                        }

                    </div>

                    <div className="col-6 d-flex justify-content-center" >
                        <div style={{width: '25rem', height: '28rem'}}>
                        <label className='font-weight-bold' >Jokes Quote</label>
                            {/* <label style={{fontSize: '13px'}}>Category: </label>
                            <select className='mx-2' style={{fontSize: '13px'}}>
                                <option disabled>select...</option>
                                <option>Programming</option>
                                <option>Miscellaneous</option>
                                <option>Dark</option>
                                <option>Pun</option>
                                <option>Spooky</option>
                                <option>Christmas</option>
                            </select> */}

                            <div onClick={() => doRandomThings()} type='button' className='float-right text-white randomHover' style={{fontSize: '13px'}}>
                            New Jokes
                            <i className="fas fa-sync-alt mx-2" ></i>
                            </div>


                            <div className="d-flex flex-wrap align-items-center justify-content-center scrollbar scrollbar-black bordered-black square thin" style={{width: '26.5rem', height: '28rem', overflowY: 'auto'}}>
                            {dataJokes && dataJokes.jokes && loadingJoke === false &&
                                dataJokes.jokes.map(joke => {
                                joke.favourite = false
                                return <Jokes joke={joke} key={joke.id}/>
                                })
                            }
                            {loadingJoke === true &&
                                // <h1>Loading</h1>
                                <div className='text-center'>
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