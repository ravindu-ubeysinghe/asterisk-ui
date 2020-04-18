import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Layout from 'views/Layout/Layout';
import Home from 'views/Home/Home';
import About from 'views/About/About';
import NotFound from 'components/NotFound/NotFound';
import Loader from 'components/Loader/Loader';
import { fetchSiteData } from 'actions/site';

export default function Site() {
    const dispatch = useDispatch();
    const server_error = useSelector(({ site }) => site.server_error);
    const loading = useSelector(({ site }) => site.loading);

    useEffect(() => {
        dispatch(fetchSiteData());
    }, [dispatch]);

    if(loading) {
        return <Loader />;
    }
    return (
        <BrowserRouter>
            {!server_error ? (
            <Layout>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" component={About} />
                        <Route component={NotFound} />
                    </Switch>
            </Layout>
            ) : (
               <NotFound error={server_error} />
            )}
        </BrowserRouter>
    );
}