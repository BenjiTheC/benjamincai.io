import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

export default function Pages() {
    return (
        <Router>
            <Switch>
                <Route exact path={'/'} component={() => <h1>HomePage</h1>} />
                <Redirect to={'/'} />
            </Switch>
        </Router>
    );
}
