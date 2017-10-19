import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Batman from './components/Batman';
import Robin from './components/Robin';
import Prodigy from './components/Prodigy';
import LocaleInfo from './components/LocaleInfo';
// import SelectLocale from './components/SelectLocale';

import './App.css';

class App extends Component {
  render() {
        const { locale } = this.props;
    return (
        <div>
            <h1>React Intl + React Router</h1>
            <Link to="/">Batman</Link> | <Link to="/robin">Robin</Link> | <Link to="/prodigy">Prodigy</Link>
            <Route exact path="/" component={Batman} />
            <Route path="/robin" component={Robin} />
            <Route path="/prodigy" component={Prodigy} />
            <LocaleInfo locale={locale} />
            {/* How can we utilize a menu to let users change their locale? */}
            {/* <SelectLocale /> */}
        </div>
    );
  }
}

export default App;
