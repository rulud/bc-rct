import Catalog from "./components/main/Catalog";
import {Route} from 'react-router-dom';
import Item from "./components/main/catalog/Item";
import React from "react";
import {Switch, Router} from "react-router-dom";
import Home from "./components/main/Home";
import NotFaund from "./components/NotFaund";
import Header from "./components/header";
import Cardx from "./components/test/Cardx";

const Routers = () => (
    <React.Fragment>
        <Header/>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/card' component={Cardx}/>
            <Route path='/catalog'>
                <Route exact path='/catalog' component={Catalog}/>
                <Route path='/catalog/:topicId' component={Item}/>
            </Route>
            <Route exact path='*' component={NotFaund}/>
        </Switch>
     </React.Fragment>
);

export default Routers;