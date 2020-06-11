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
            <nav>
                <div className="nav-wrapper">
                    {
                        user? (
                            <div>
                                Sign Out
                            </div>
                        ) : (
                            <div>
                                Sign In
                            </div>
                        )
                    }
                </div>
            </nav>
        </div>
    );
};

export default graphql(CurrentUser)(App);