import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Nurse from '../src/components/Nurse';
import Doctor from '../src/components/Doctor';
import Camera from '../src/components/Camera'

import * as serviceWorker from './serviceWorker';

var user = {
    type: window.location.pathname.slice(1)
};

// Get user from databasse after sign in using firebase ... 
if (user.type == "nurse")  {
    ReactDOM.render(<Nurse />, document.getElementById('root'));
} else if(user.type == "doctor") {
    ReactDOM.render(<Doctor />, document.getElementById('root'));
} else if(user.type == "camera") {
    ReactDOM.render(<Camera />, document.getElementById('root'));
}
else {
    ReactDOM.render(<App />, document.getElementById('root'));
}



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
