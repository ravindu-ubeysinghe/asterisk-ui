import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Home from '../../views/Home/Home';
import About from '../../views/About/About';

import fetchSiteData from './SiteActions';

export default function Site() {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchSiteData());
    }, [dispatch]);

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
            </Switch>
        </BrowserRouter>
    );
}