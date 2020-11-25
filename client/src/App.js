import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { Home, Category } from './pages'

function App(props) {

  return (
    <>
      <section id="navbar" >
        <nav className="pl-5 my-2" >
          <div id="logo">
              <Link to="/" className="app-title" >Jokes</Link>
          </div>
          <Link to='/category'>Category</Link>
        </nav>
      </section>

      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/category'>
          <Category/>
        </Route>
      </Switch>
    </>
  )
}

export default App