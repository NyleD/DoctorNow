import React, { Component } from 'react';
import Submit from './Submit';
import Form from './Form';

class Nurse extends Component {
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
                  <button onClick={() => { document.location.href = "Home"; }} type="button" class="btn btn-primary dropdown-toggle! dashboard"> 
                    Back
                  </button>
          
                </div>
              </li>
            </ul> 
          </div>
        </div> 
      </nav>
    </div>
   </div> 
    
<div class = "fourmpadding">
   <a> Patient Fourm </a>
    <div class="col-sm-6">
      <div class="card">
        <div class="card-body">
          <Form />
        </div>
      </div>
    </div>
  </div> 

</div> 
    ); 

  }

}
export default Nurse; 
