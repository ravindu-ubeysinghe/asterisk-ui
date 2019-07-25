import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Home from '../../views/Home/Home';
import About from '../../views/About/About';
import NotFound from './NotFound/NotFound';

import { FETCH_SITE_DATA } from './SiteActionTypes';
// import fetchSiteData from './SiteActions';

export default function Site() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: FETCH_SITE_DATA });
    }, [dispatch]);

    const server_error = useSelector((state) => state.site.server_error);

    return (
        <>
            {!server_error ? (
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" component={About} />
                    </Switch>
                </BrowserRouter>
            ) : (
                <NotFound error={server_error} />
            )}

        </>
    );
}