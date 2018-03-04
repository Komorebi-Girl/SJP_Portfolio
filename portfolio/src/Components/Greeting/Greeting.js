import React, { Component } from "react";
import GreetingsList from "../../Greetings.json";
import "./Greeting.css"

class Greeting extends Component {
  state = {
    index: 0, 
    selectPhrase: GreetingsList[0].title, 
    selectColor: GreetingsList[0].color, 
    selectFont: GreetingsList[0].font
  }

  componentDidMount(){
    var that = this;
    setInterval(that.changeGreeting,5000)
  }

  changeGreeting = () => {
    let i = this.state.index;
    i++
    if(i>5){
      i = 0
    }
    this.setState({index:i, selectColor:GreetingsList[i].color, selectPhrase:GreetingsList[i].title, selectFont:GreetingsList[i].font })
  }

  render(){
    return(
      <h1 id="myGreeting" style={{"color":this.state.selectColor,"font-family":this.state.selectFont}}>{this.state.selectPhrase}</h1>
    )
  }
}

export default Greeting