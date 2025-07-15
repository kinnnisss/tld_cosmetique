import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Home from './views/home'
import NotFound from './views/not-found'
import Achat from './views/Achat'
import Produits from './views/produits'
import Apropos from './views/propos'
import Contact from './views/contact'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
         <Route path="/Achat" component={Achat} />
         <Route path="/produits" component={Produits} />
         <Route path="/propos" component={Apropos} />
         <Route path="/contact" component={Contact} />
        <Route component={NotFound} path="**" />     
        <Redirect to="*" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
