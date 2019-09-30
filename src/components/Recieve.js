import React, { Component } from 'react';
import firebase from 'firebase';
import '../firebase/firebase'

import Form from '../components/Form';

const db = firebase.database();
var foundData;
var val;
var clicked = false;

// determine if there is data to recieve

class Recieve extends Component {
    buildForm() {
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
        clicked = true;
    };

  render() {
      if (!clicked) {
        return (
            <button onClick={this.buildForm} >Recieve</button> 
        ); 
      } else {
        return (
            <Form data={val} /> 
        );     
      }
  }

}
export default Recieve; 
