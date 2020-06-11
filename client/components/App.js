import React from 'react';
import {graphql} from 'react-apollo';

import CurrentUser from "../queries/CurrentUser";
import SignOut from "../queries/SignOut";

const App = ({data: {loading, user}, mutate}) => {
    return loading ? (
        <div className="container">
            <h3>Loading...</h3>
        </div>
    ) : (
        <div className="container">
            <nav>
                <div className="nav-wrapper">
                    <ul className="right">
                        {
                            user ? (
                                <div onClick={mutate}>
                                    Sign Out
                                </div>
                            ) : (
                                <div>
                                    <li>Sign Up</li>
                                    <li>Sign In</li>
                                </div>
                            )
                        }
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default graphql(SignOut)(graphql(CurrentUser)(App));