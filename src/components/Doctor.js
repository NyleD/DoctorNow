import React, { Component } from 'react';
import Recieve from './Recieve';
import Form from './Form';

import Camera from './Camera';

import firebase from 'firebase';
import '../firebase/firebase'


import '../doctor.css'
import greenBut from './greenBut.jpg'; // with import
import yelBut from './yelBut.jpg'; // with import
import redBut from './redBut.jpg'; // with import

const db = firebase.database();
var foundData;
var val;

// determine if there is data to recieve

db.ref()
.once('value')
.then((snapshot) => {
  val = snapshot.val(); 
  if (val.test1 != "") {
    foundData = true;
    console.log(val);
  }
})
.catch((e) => {
  console.log(e);
})

console.log(val); 


/*
class Doctor extends Component {
  render() {
    return (
      <div>
        <Recieve />
      </div>
    );
  } 
  */

class Doctor extends Component {
  render() {
    return (
  <div>
      <div className="App">
      <div id="home">
       <nav class="navbar navbar-light navbar-expand-xl fixed-top text-capitalize">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Doctor<b class="vote">Now</b></a>
          <div class="collapse navbar-collapse" id="menu">
            <ul class="navbar-nav ml-auto">
              <li>
                <div class="dropdown">
                  <button type="button" onClick={() => { document.location.href = "HOME"; }} class="btn btn-primary dropdown-toggle! dashboard">
                    Back
                  </button>
                  <div class="dropdown-menu">
                      <a class="dropdown-item" href="#">Nurse Dashboard</a>
                      <a class="dropdown-item" href="#">Doctor Dashboard</a>
                  </div>
                </div>
              </li>
            </ul> 
          </div>
        </div> 
      </nav>
    </div>
   </div> 

<div class="vertical-menu">
  <a href="#" class="active">Patient Waitlist</a>
  {/* <a href="#"><img src={val.desc != "" ? greenBut : ''} />{val.desc != "" ? 'nurse 1' : ''}</a> */}
  <a href="#"><img src={greenBut} /> John Smith </a>
  {/* <a href="#"><img src={greenBut} /> Sam Jones</a>
  <a href="#"><img src={greenBut} /> Susan Denn</a>
  <a href="#"><img src={greenBut} /> Chris Rice</a>
  <a href="#"><img src={yelBut} /> Francis Do</a>
  <a href="#"><img src={yelBut} /> Daniel Wu</a>
  <a href="#"><img src={yelBut} /> Nyle Dhillon</a>
  <a href="#"><img src={redBut} /> Jane Conne</a>
  <a href="#"><img src={redBut} /> Kris Frash</a>
  <a href="#"><img src={redBut} /> Travis Wilson</a>
  <a href="#"><img src={redBut} /> Isaac Wattson</a>
  <a href="#"><img src={redBut} /> Darious Torre</a> */}
</div>

<div class = "fourmpadding">

<Camera />

   <a> John Smith </a>
    <div class="col-sm-6">
      <div class="card">
        <div class="card-body">
        <form>


          <div class="form-group colos">
              <label for="exampleFormControlInput1">General Appearance</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">- Headaches</textarea>
          </div>

          <div class="form-group colos">
              <label for="exampleFormControlInput1">Gender</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">- Male</textarea>
          </div>

          
      <div class="form-group">
          <label for="exampleFormControlTextarea1">Health History</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">- Peanut Allergy</textarea>
          </div>
    
      
      <div class="form-group">
          <label for="exampleFormControlTextarea1">Description</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      
    </form>
         </div>
      </div>
    </div>
  </div> 

</div> 
    ); 

  }

}
export default Doctor; 
