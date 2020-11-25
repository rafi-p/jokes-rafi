import React, { useState } from 'react'
import { useHistory, useRouteMatch, Switch, Route} from 'react-router-dom'
import {CategoryDetail} from './index.js'
import loading1 from '../assets/animation_500_khvi1rtu.gif'
import noCategory from '../assets/undraw_Faq_re_31cw.svg'
import useFetch from '../helpers/useFetcher'
const categories = ['Programming', 'Miscellaneous', 'Dark', 'Pun']

function Category (props) {
    const {path, url} = useRouteMatch()
    const [clicked, setClick] = useState(false)
    const history = useHistory()

    const [dataMeme, loadingMeme, randomMeme] = useFetch('https://meme-api.herokuapp.com/gimme')

    function toDetailCategory (category) {
        randomMeme('https://meme-api.herokuapp.com/gimme')
        setClick(true)
        history.push(`${url}/${category}`)
    }

    return (
        <>
            <section className="container pt-3">
                <div className='container' style={{maxWidth: '1025px'}}>
                    <div className="row">

                        <div className="col-6 d-flex justify-content-center" >

                            <div className="btn-group" style={{position: 'absolute'}}>
                                <label style={{fontSize: '13px'}}>Category</label>
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
                                <div className='text-center'>
                                    <img src={noCategory} alt="" style={{width: '24rem', height: '26rem', objectFit: 'contain', marginBottom: '-3rem'}}/>
                                    <label className='font-weight-bold' >Choose category first</label>
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
                                <div className='text-center'>
                                    <img src={dataMeme.url} alt="" style={{width: '450px', height: '450px', objectFit: 'contain', zIndex: '-20'}}/>
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
                    </div>
                </div>

            </section>

        </>
    )
}

export default Category