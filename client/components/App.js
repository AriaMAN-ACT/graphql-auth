import React from 'react';
import {graphql} from 'react-apollo';

import CurrentUser from "../queries/CurrentUser";

const App = ({data: {loading, user}}) => {
    return loading ? (
        <div className="container">
            <h3>Loading...</h3>
        </div>
    ) : (
        <div className="container">
            {
                user ? 'You are signed in.' : 'You are not signed in.'
            }
        </div>
    );
};

export default graphql(CurrentUser)(App);