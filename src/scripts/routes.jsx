// routes.jsx
import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './components/app.jsx';
import Home from './components/home.jsx';
import About from './components/about.jsx';

const Routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
    </Route>
);

module.export = Routes;
