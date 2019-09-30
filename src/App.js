import React, { Component } from 'react';
import './App.css';
import './firebase/firebase';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="home">
		      <nav class="navbar navbar-light navbar-expand-xl fixed-top text-capitalize">
			      <div class="container-fluid">
				      <a class="navbar-brand" href="#">Doctor<b class="vote">Now</b></a>
				      <div class="collapse navbar-collapse" id="menu">
					      <ul class="navbar-nav ml-auto">
                  <li>
                    <div class="dropdown">
                      <button type="button" class="btn btn-primary dropdown-toggle! dashboard" data-toggle="dropdown">
                        Dashboard
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

		<div class="landing">
			<div class="home-wrap">
				<div class="home-inner">
				</div>
            </div>
    
            <div class="caption">
                <h2 class = "doctor">Doctor<b class = "vote doctor">Now.</b> </h2> 
                <h4>Quote that is related to health care here</h4>
                <a class="btn btn-outline-dark landingButton" href= ""> Sign Up </a>
                <a class="btn btn-outline-dark landingButton2" href=""> View Dashboard </a>
            </div> 
      </div>
      </div>
    );
  }
}

export default App;
