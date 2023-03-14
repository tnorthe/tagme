import React from 'react';
import ReactDOM  from 'react-dom';
import {GoogleOAuthProvider} from '@react-oauth/google';
import {BrowserRouter as Router} from 'react-router-dom';

import App from './App';
import './index.css';

ReactDOM.render(
    <GoogleOAuthProvider clientId='928830496071-358rp9p1sq3d9o8570nd57blrtn7jcbl.apps.googleusercontent.com'>
        <React.StrictMode>
        <Router>
            <App/>
        </Router>
        </React.StrictMode>
    </GoogleOAuthProvider>,
    document.getElementById('root')
    );