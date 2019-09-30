import React, { Component } from 'react';
import Submit from './Submit';

import firebase from 'firebase';

import '../firebase/firebase'

function sendData() {
  firebase.database().ref().set({
    label: document.getElementById("exampleFormControlInput1").value, 
    reason: document.getElementById("exampleFormControlInput2").value,  
    gender: document.getElementById("exampleFormControlInput3").value, 
    history: document.getElementById("exampleFormControlTextarea4").value, 
    desc: document.getElementById("exampleFormControlTextarea5").value
  });
  alert('success');
}

class Form extends Component {
  render() {
    return (
      <form>
      <div class="form-group colos">
          <label for="exampleFormControlInput1">Patient Label</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="">
          </input>
      </div>


      <div class="form-group colos">
          <label for="exampleFormControlInput1">Reason</label>
          <input type="text" class="form-control" id="exampleFormControlInput2" placeholder="">
          </input>
      </div>

      <div class="form-group colos">
          <label for="exampleFormControlInput1">Gender</label>
          <input type="text" class="form-control" id="exampleFormControlInput3" placeholder="">
          </input>
      </div>

      
  <div class="form-group">
      <label for="exampleFormControlTextarea1">Health History</label>
      <textarea type="text" class="form-control" id="exampleFormControlTextarea4" rows="3"></textarea>
  </div>

  
  <div class="form-group">
      <label for="exampleFormControlTextarea1">Description</label>
      <textarea type="text" class="form-control" id="exampleFormControlTextarea5" rows="3"></textarea>
  </div>

 <div class = "pos"> 
 <button type="button pos" class="btn btn-primary dropdown-toggle! dashboard" onClick={sendData}> 
          Submit
  </button>
</div>
  
</form>
    ); 
  }
}
export default Form; 
