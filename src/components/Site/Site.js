import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Home from '../../views/Home/Home';
import About from '../../views/About/About';
import NotFound from './NotFound/NotFound';
import Loader from '../../components/Loader/Loader';
import withSkeleton from '../../hooks/withSkeleton';

export default function Site() {
    const dispatch = useDispatch();
    const server_error = useSelector(({ site }) => site.server_error);
    const loading = useSelector(({ site }) => site.loading);

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
                        <Switch>
                            <Route path="/" exact component={withSkeleton(Home)} />
                            <Route path="/about" component={withSkeleton(About)} />
                            <Route component={NotFound} />
                        </Switch>
                    </BrowserRouter>
                </>
            ) : (
                <NotFound error={server_error} />
            )}

        </>
    );
}