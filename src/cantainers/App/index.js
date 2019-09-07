import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../HomePage/index';
import {Container} from 'react-bootstrap';

const App = () => (
    <Container fluid={true} style={{ paddingLeft: 0, paddingRight: 0, margin: 0 }}>
        <Helmet
            defaultTitle="Todo List"
        >
        </Helmet>
        <Switch>
            <Route exact path="/" component={HomePage} />
        </Switch>
    </Container>
);

export default App;
