import React, { Component } from 'react';

function sendData() {
    console.log('hello');
}

class Submit extends Component {
  render() {
    return (
        <button onClick={sendData}>Submit</button> 
    ); 

  }

}
export default Submit; 
