import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { Home, Category, Favorite } from './pages'
import { Provider } from 'react-redux'
import store from './store'

function App(props) {

  return (
    <Provider store={store}>
      <section id="navbar" >
        <nav className="pl-5 my-2" >
          <div id="logo">
              <Link to="/" className="app-title" >Jokes</Link>
          </div>
          <Link to='/category'>Category</Link>
          <Link to='/favorite'>Favorite</Link>
        </nav>
      </section>

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
    </Provider>
  )
}

export default App