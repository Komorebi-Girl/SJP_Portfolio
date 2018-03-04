import React from "react";
import Greeting from "../../Components/Greeting";
import Intro from "../../Components/Intro";

const Landing = () => {
  return(<div className="container-fluid">
  <div className="row">
    <div className="col-sm-12">
      <h4 style={{"font-family": "Indie Flower, cursive", "font-size":"2.0rem", "font-weight":"Bold"}}>Stacy J.P.</h4>
    </div>
  </div>

  <div className="row">
    <div className="col-sm-12">
      <Intro><Greeting/></Intro>
    </div>
  </div>

</div>)}

export default Landing