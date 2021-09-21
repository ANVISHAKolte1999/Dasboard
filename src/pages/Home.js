import React from 'react';
import './Home.css';
import image1 from '../Assets/column.jpg';
import image2 from '../Assets/piechart.png';
import image3 from '../Assets/line-graph.png';
import image4 from '../Assets/india.jpg';

function Home() {
  return (
    <div style={{marginLeft:"250px"}} class="col-sm-9">
    <div class="well">
      <h4>Dashboard</h4>
      <p>Some text..</p>
    </div>

    
    <div class="row">
        <div class="col-sm-3">
          <div class="well">
          <i style={{fontSize:"36px"}} class="fa fa-money" ></i>
            <p>1 Million</p> 
          </div>
        </div>
        <div class="col-sm-3">
          <div class="well">
          <i style={{fontSize:"36px"}} class="fa fa-bar-chart"></i>
            <p>100 Million</p> 
          </div>
        </div>
        <div class="col-sm-3">
          <div class="well">
          <i style={{fontSize:"36px"}} class="fa fa-lastfm-square" ></i>
            <p>10 Million</p> 
          </div>
        </div>
        <div class="col-sm-3">
          <div class="well">
          <i style={{fontSize:"36px"}} class="fa fa-line-chart"></i>
            <p>30%</p> 
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4">
          <div class="well">
          <img src={image1}  alt="logo1" style={{height: "230px" , display:"flex" , marginTop:"10px",width:"325px"}} /> 
            <p style={{marginLeft:"105px"}}>Daily Update</p> 
           
          </div>
        </div>
        <div class="col-sm-4">
          <div class="well">
          <img src={image2}  alt="logo1" style={{height: "230px" , display:"flex" , marginTop:"10px",width:"325px"}} />  
          <p style={{marginLeft:"105px"}}>Weekly Sell</p> 
            
          </div>
        </div>
        <div class="col-sm-4">
          <div class="well">
          <img src={image3}  alt="logo1" style={{height: "230px" , display:"flex" , marginTop:"10px",width:"325px"}} />  
          <p style={{marginLeft:"105px"}}>Yearly Profit</p> 
            
          </div>
        </div>
        <div class="w3-container w3-section">
    <div style={{margin:"0 -16px"}} class="w3-row-padding" >
      <div class="w3-third">
        <h5>Regions</h5>
        <img src={image4}  alt="logo1" style={{height: "270px" , display:"flex" , marginTop:"10px",width:"325px"}} />  
      </div>
      <div class="w3-twothird">
        <h5>Feeds</h5>
        <table class="w3-table w3-striped w3-white">
          <tr>
            <td><i class="fa fa-user w3-blue w3-padding-tiny"></i></td>
            <td>New record, over 90 views.</td>
            <td><i>10 mins</i></td>
          </tr>
          <tr>
            <td><i class="fa fa-bell w3-red w3-padding-tiny"></i></td>
            <td>Database error.</td>
            <td><i>15 mins</i></td>
          </tr>
          <tr>
            <td><i class="fa fa-users w3-orange w3-text-white w3-padding-tiny"></i></td>
            <td>New record, over 40 users.</td>
            <td><i>17 mins</i></td>
          </tr>
          <tr>
            <td><i class="fa fa-comment w3-red w3-padding-tiny"></i></td>
            <td>New comments.</td>
            <td><i>25 mins</i></td>
          </tr>
          <tr>
            <td><i class="fa fa-bookmark w3-light-blue w3-padding-tiny"></i></td>
            <td>Check transactions.</td>
            <td><i>28 mins</i></td>
          </tr>
          <tr>
            <td><i class="fa fa-laptop w3-red w3-padding-tiny"></i></td>
            <td>CPU overload.</td>
            <td><i>35 mins</i></td>
          </tr>
          <tr>
            <td><i class="fa fa-share-alt w3-green w3-padding-tiny"></i></td>
            <td>New shares.</td>
            <td><i>39 mins</i></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
  <div class="w3-container">
    <h5>General Stats</h5>
    <p>New Visitors</p>
    <div class="w3-progress-container w3-grey">
      <div  style={{width:"25%"}} id="myBar" class="w3-progressbar w3-green">
        <div class="w3-center w3-text-white">+25%</div>
      </div>
    </div>

    <p>New Users</p>
    <div class="w3-progress-container w3-grey">
      <div style={{width:"50%"}} id="myBar" class="w3-progressbar w3-orange" >
        <div class="w3-center w3-text-white">50%</div>
      </div>
    </div>

    <p>Bounce Rate</p>
    <div class="w3-progress-container w3-grey">
      <div style={{width:"75%"}} id="myBar" class="w3-progressbar w3-red" >
        <div class="w3-center w3-text-white">75%</div>
      </div>
    </div>
  </div>

  <br></br>
  <div class="w3-container w3-dark-grey w3-padding-32">
    <div class="w3-row">
      <div class="w3-container w3-third">
        <h5 class="w3-bottombar w3-border-green">Demographic</h5>
        <p>Language</p>
        <p>Country</p>
        <p>City</p>
      </div>
      <div class="w3-container w3-third">
        <h5 class="w3-bottombar w3-border-red">System</h5>
        <p>Browser</p>
        <p>OS</p>
        <p>More</p>
      </div>
      <div class="w3-container w3-third">
        <h5 class="w3-bottombar w3-border-orange">Target</h5>
        <p>Users</p>
        <p>Active</p>
        <p>Geo</p>
        <p>Interests</p>
      </div>
    </div>
  </div>
<br></br>
      </div>
      </div>
  );
}

export default Home;