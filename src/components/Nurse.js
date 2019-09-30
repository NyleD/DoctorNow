import React, { Component } from 'react';
import Submit from './Submit';
import firebase from 'firebase';

import '../firebase/firebase'

function sendData() {
  firebase.database().ref().set({
    test1: 'hello', 
    test2: 'hello',  
  });
  console.log('hello');
}

class Nurse extends Component {
  render() {
    return (
      <Submit onClick={sendData}/>
    ); 

  }

}
export default Nurse; 
