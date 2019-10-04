import React from 'react';
import { Router, Route } from 'react-router'
// eslint-disable-next-line 
import App from '../containers/App';
import Posts from '../containers/Posts';
import AddPost from '../containers/AddPost';

const Routes = (props) => (
    <Router { ...props }>
        <Route exact path='/' component={ Posts } />
         <Route path='/add' component={ AddPost } /> 
    </Router>
);

export default Routes;