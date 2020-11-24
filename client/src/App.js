import React, { useCallback } from 'react'
import Jokes from './components/jokes.js'
import loading1 from './assets/animation_500_khvi1rtu.gif'
import loadingText from './assets/animation_500_khvpggp3.gif'
import useFetch from './helpers/useFetcher'

function App(props) {
  const [dataJokes, loadingJoke, randomJoke] = useFetch('https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist&type=twopart&idRange=0-200&amount=10')

  const [dataMeme, loadingMeme, randomMeme] = useFetch('https://meme-api.herokuapp.com/gimme')

  const doRandomThings = useCallback(() => {
    randomJoke('https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist&type=twopart&idRange=0-200&amount=10')
    randomMeme('https://meme-api.herokuapp.com/gimme')
  },[randomJoke, randomMeme])

  return (
    <React.Fragment>
      <section id="navbar" >
        <nav className="pl-5 my-2" >
          <div id="logo">
            <h3 className="app-title" >Jokes</h3>
          </div>
        </nav>
      </section>

      <section className="container pt-3">
        <div className='container' style={{maxWidth: '1025px'}}>
          <div className="row">
            <div className="col-6 d-flex mt-3 justify-content-center align-items-center">
                  {dataMeme && loadingMeme === false &&
                    <img src={dataMeme.url} alt="" style={{width: '450px', height: '450px', objectFit: 'contain'}}/>
                  }
                  {loadingMeme === true &&
                    <img src={loading1} alt="" style={{width: '450px', height: '450px', objectFit: 'contain'}}/>
                  }

            </div>

            <div className="col-6 d-flex justify-content-center" >
              <div style={{width: '25rem', height: '28rem'}}>

                <label style={{fontSize: '13px'}}>Category: </label>
                <select className='mx-2' style={{fontSize: '13px'}}>
                  <option disabled>select...</option>
                  <option>Programming</option>
                  <option>Miscellaneous</option>
                  <option>Dark</option>
                  <option>Pun</option>
                  <option>Spooky</option>
                  <option>Christmas</option>
                </select>
                <div onClick={() => doRandomThings()} type='button' className='float-right' style={{fontSize: '13px'}}>
                  New Jokes
                  <i className="fas fa-sync-alt mx-2" ></i>
                </div>


                <div className="d-flex flex-wrap align-items-center justify-content-center" style={{width: '26.5rem', height: '28rem', overflowY: 'auto'}}>
                  {dataJokes && dataJokes.jokes && loadingJoke === false &&
                    dataJokes.jokes.map(joke => {
                      return <Jokes joke={joke} key={joke.id}/>
                    })
                  }
                  {loadingJoke === true &&
                    // <h1>Loading</h1>
                    <img src={loadingText} alt="" style={{width: '24rem', height: '26rem', objectFit: 'contain'}}/>
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

export default App