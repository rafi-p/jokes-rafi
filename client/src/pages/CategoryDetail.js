import React, { useCallback } from 'react'
import loadingText from '../assets/animation_500_khvpggp3.gif'
import errorGif from '../assets/animation_500_khy7yy9i.gif'
import Jokes from '../components/jokes.js'
import { useParams } from 'react-router-dom'
import { randomJokes } from '../store/index'
import { useSelector, useDispatch } from 'react-redux'

function CategoryDetail (props) {
    const {category} = useParams()
    const dispatch = useDispatch()

    const dataCategory = useSelector((state) => state.jokes.data)
    const loadingCategory = useSelector((state) => state.jokes.loading)
    const errorCategory = useSelector((state) => state.jokes.error)


    const doRandomThings = useCallback(() => {
        dispatch(randomJokes(`https://sv443.net/jokeapi/v2/joke/${category}?blacklistFlags=nsfw,religious,political,racist,sexist&type=twopart&idRange=0-200&amount=10`))
    },[dispatch, category])

    if (errorCategory) {
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
            {/* <div className="col-6 d-flex justify-content-center" > */}

                <div style={{width: '25rem', height: '28rem'}}>
                    <label className='font-weight-bold' >{category}</label>
                    <div onClick={() => doRandomThings()} type='button' className='float-right randomHover ' style={{fontSize: '13px'}}>
                    New Jokes
                    <i className="fas fa-sync-alt mx-2" ></i>
                    </div>


                    <div className="d-flex flex-wrap align-items-center justify-content-center scrollbar scrollbar-black bordered-black square thin" style={{width: '26.5rem', height: '28rem', overflowY: 'auto'}}>
                    {dataCategory && dataCategory.jokes && loadingCategory === false &&
                        dataCategory.jokes.map(joke => {
                        joke.favourite = false
                        return <Jokes joke={joke} key={joke.id}/>
                        })
                    }
                    {loadingCategory === true &&
                        <div className='text-center  animate__animated animate__fadeIn'>
                            <img src={loadingText} alt="" style={{width: '24rem', height: '26rem', objectFit: 'contain', marginBottom: '-3.5rem'}}/>
                            <h4>Loading</h4>
                        </div>
                    }
                    </div>
                </div>
            {/* </div> */}
        </>
    )
}

export default CategoryDetail