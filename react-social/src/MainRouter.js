import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Home from "./core/Home";
import Signin from './user/Signin';
import Signup from './user/Signup';

const MainRouter = () =>(
    <div>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/signin" component={Signin}/>
        </Switch>
    </div>
)

export default MainRouter ;