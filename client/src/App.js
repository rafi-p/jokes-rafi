import React from 'react'
// import axios from './axios/axiosInstance'
import Jokes from './components/jokes.js'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      jokes: [],
      urlMeme: ''
    }
  }

  componentDidMount() {
    this.randomJoke()
  }

  randomMeme() {
    fetch('https://meme-api.herokuapp.com/gimme', {
      method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      this.setState({
        urlMeme: data.url
      })
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  randomJoke() {
    fetch('https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist&type=twopart&idRange=0-200&amount=10', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data.jokes);
        this.setState({
          jokes: data.jokes
        })
        this.randomMeme()
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  render() {
    const {  jokes, urlMeme } = this.state;
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
              <div className="col-6 d-flex mt-3 justify-content-center">
                <img src={urlMeme} alt="" style={{width: '450px', height: '450px', objectFit: 'contain'}}/>
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
                  <div onClick={() => this.randomJoke()} type='button' className='float-right' style={{fontSize: '13px'}}>
                    New Jokes
                    <i className="fas fa-sync-alt mx-2" ></i>
                  </div>

                  <div style={{width: '26.5rem', height: '28rem', overflowY: 'auto'}}>
                    {jokes.map(joke => {
                      return <Jokes joke={joke} key={joke.id}/>
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>


        </section>
      </React.Fragment>
    )
  }
}


export default App