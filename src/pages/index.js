import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Portfolio from './Portfolio';

export default function Pages() {
    return (
        <Router>
            <Switch>
                <Route exact path={'/'} component={() => <Portfolio />} />
                <Redirect to={'/'} />
            </Switch>
        </Router>
    );
}
