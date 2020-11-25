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
            <h1>{category}</h1>

            <div className="col-6 d-flex justify-content-center" >
                <div style={{width: '25rem', height: '28rem'}}>

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
                    <div onClick={() => doRandomThings()} type='button' className='float-right' style={{fontSize: '13px'}}>
                    New Jokes
                    <i className="fas fa-sync-alt mx-2" ></i>
                    </div>


                    <div className="d-flex flex-wrap align-items-center justify-content-center" style={{width: '26.5rem', height: '28rem', overflowY: 'auto'}}>
                    {dataCategory && dataCategory.jokes && loadingCategory === false &&
                        dataCategory.jokes.map(joke => {
                        joke.favourite = false
                        return <Jokes joke={joke} key={joke.id}/>
                        })
                    }
                    {loadingCategory === true &&
                        // <h1>Loading</h1>
                        <img src={loadingText} alt="" style={{width: '24rem', height: '26rem', objectFit: 'contain'}}/>
                    }
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoryDetail