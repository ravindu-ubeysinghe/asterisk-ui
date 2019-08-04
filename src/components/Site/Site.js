import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Home from '../../views/Home/Home';
import About from '../../views/About/About';
import NotFound from './NotFound/NotFound';
import Loader from '../../components/Loader/Loader';

export default function Site() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_SITE_DATA' });
    }, [dispatch]);

    const server_error = useSelector(({ site }) => site.server_error);
    const loading = useSelector(({ site }) => site.loading);

    if(loading) {
        return <Loader />;
    }
    return (
        <>
            {!server_error ? (
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" component={About} />
                        <Route component={NotFound} />
                    </Switch>
                </BrowserRouter>
            ) : (
                <NotFound error={server_error} />
            )}

        </>
    );
}