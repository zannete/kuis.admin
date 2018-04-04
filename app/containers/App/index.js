/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import TambahKuisPage from 'containers/TambahKuisPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

export default function App() {
  return (
    <div>
      <header className="navbar navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand">
            <img src="/logo.png"/>
          </a>
        </div>
      </header>
      <div className="container">
        <Switch>
          <Route exact path="/" component={TambahKuisPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </div>
  );
}
