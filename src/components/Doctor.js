import React, { Component } from 'react';
import Recieve from './Recieve';
import Form from './Form';

import firebase from 'firebase';
import '../firebase/firebase'

const db = firebase.database();
var foundData;
var val;

// determine if there is data to recieve

function buildForm() {
  console.log('clicked');
  db.ref()
  .once('value')
  .then((snapshot) => {
    val = snapshot.val(); 
    if (val.test1 != "") {
      foundData = true;
      return val;
    }
  })
  .catch((e) => {
    console.log(e);
  })
};

class Doctor extends Component {
  render() {
    return (
      <div>
        <Recieve />
      </div>
    );
  } 
}
export default Doctor; 
