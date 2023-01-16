import React from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Home from './home';
import Post from './post';
import Profile from './profile'
import Header from './header';
import Params from './params'

const App =()=>{
    return(
        
        <BrowserRouter>
       <Header/>
       <Route exact path='/' component={Home}/>
       <Route exact path='/post' component={Post}/>
       <Route path='/post/:topic' component={Params}/>
       <Route path='/profile' component={Profile}/>

        </BrowserRouter>
    )
}
export default App;