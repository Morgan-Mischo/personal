import React from 'react'; 
import { Switch, Route } from 'react-router-dom'; 
import Login from './components/Login'; 
import Signup from './components/Signup'; 
import Dashboard from './components/Dashboard'; 
import FirstPage from './components/FirstPage'

export default (
    <Switch>
        <Route path='/firstpage' component={FirstPage} />
        <Route exact path='/' component={Dashboard} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
    </Switch>
)