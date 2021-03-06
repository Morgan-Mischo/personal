import React from 'react'; 
import { Switch, Route } from 'react-router-dom'; 
import Login from './components/Login'; 
import Signup from './components/Signup'; 
import Dashboard from './components/Dashboard'; 
import FirstPage from './components/FirstPage'; 
import Search from './components/Search'; 
import Profile from './components/Profile'; 
import Post from './components/Post'; 
import Create from './components/Create'; 

export default (
    <Switch>
        <Route path='/firstpage' component={FirstPage} />
        <Route exact path='/' component={Dashboard} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/search' component={Search}/>
        <Route path='/profile/:id' component={Profile}/>
        <Route path='/post' component={Post}/>
        <Route path = '/create' component={Create}/>
    </Switch>
)