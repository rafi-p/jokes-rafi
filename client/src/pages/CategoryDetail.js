import React, { useCallback } from 'react'
import loadingText from '../assets/animation_500_khvpggp3.gif'
import Jokes from '../components/jokes.js'
import { useParams } from 'react-router-dom'
import useFetch from '../helpers/useFetcher'

function CategoryDetail (props) {
    const {category} = useParams()

    const [dataCategory, loadingCategory, randomCategory] = useFetch(`https://sv443.net/jokeapi/v2/joke/${category}?blacklistFlags=nsfw,religious,political,racist,sexist&type=twopart&idRange=0-200&amount=10`)

    const doRandomThings = useCallback(() => {
        randomCategory(`https://sv443.net/jokeapi/v2/joke/${category}?blacklistFlags=nsfw,religious,political,racist,sexist&type=twopart&idRange=0-200&amount=10`)
    },[randomCategory, category])

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
                        // <h1>Loading</h1>
                        <div className='text-center'>
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