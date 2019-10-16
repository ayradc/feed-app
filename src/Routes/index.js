import React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
//import App from '../containers/App';
import Posts from '../containers/Posts';
import AddPost from '../containers/AddPost';

const Routes = () => (
    <>
        <Route exact path='/' component={Posts} />
        <Route path='/add' component={AddPost} />
    </>
);

export default Routes;