import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '@ionic/react/css/core.css';
import MobileApp from './components/Mobile/Base';
import Admin from './components/Admin/Base';
import '../css/app.css';
    
ReactDOM.render(
    <Router>
        <Switch>
          <Route path="/app">
            <MobileApp />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
        </Switch>
    </Router>, document.getElementById('root')
);