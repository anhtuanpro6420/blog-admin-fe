import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.less';
import Home from 'pages/Home';
import Wrapper from 'components/Wrapper';

function App(): JSX.Element {
    const routes = (
        <Switch>
            <Route path='/home'>
                <Home />
            </Route>
            <Redirect to='/home' />
        </Switch>
    );
    return <Wrapper>{routes}</Wrapper>;
}

export default App;
