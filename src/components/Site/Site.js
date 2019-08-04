import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import parse from 'url-parse';

import Home from '../../views/Home/Home';
import About from '../../views/About/About';
import NotFound from './NotFound/NotFound';
import Loader from '../../components/Loader/Loader';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export default function Site() {
    const dispatch = useDispatch();
    const server_error = useSelector(({ site }) => site.server_error);
    const loading = useSelector(({ site }) => site.loading);
    const url = parse(window.location.href);
    const isHome = url.pathname === '/';

    useEffect(() => {
        dispatch({ type: 'FETCH_SITE_DATA' });
    }, [dispatch]);

    if(loading) {
        return <Loader />;
    }
    return (
        <>
            {!server_error ? (
                <>
                    <BrowserRouter>
                        <Header />
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/about" component={About} />
                            <Route component={NotFound} />
                        </Switch>
                        <Footer isHome={isHome}/>
                    </BrowserRouter>
                </>
            ) : (
                <NotFound error={server_error} />
            )}

        </>
    );
}