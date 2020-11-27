import React from 'react'
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom'
import { Home, Category, Favorite } from './pages'
import { Provider} from 'react-redux'
import wave from './assets/wave1.svg'
import store from './store'

function App(props) {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link data-testid='home-link' to="/" className="navbar-brand app-title text-white font-weight-bolder" >Jokes</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link data-testid='category-link' className='nav-link text-white font-weight-bold' to='/category' style={{fontSize: '13px'}}>Category</Link>
              </li>
              <li className="nav-item">
                <Link data-testid='favorite-link' className='nav-link text-white font-weight-bold' to='/favorite' style={{fontSize: '13px'}}>Favorite</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/category'>
            <Category/>
          </Route>
          <Route path='/favorite'>
            <Favorite/>
          </Route>
        </Switch>

        <img src={wave} alt="" style={{position: 'fixed', zIndex: '-1',top:'-5px'}}></img>
      </BrowserRouter>
    </Provider>
  )
}

export default App