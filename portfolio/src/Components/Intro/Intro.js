import React from "react";
import "./Intro.css"

const Intro = (props) => {
  return (<h1 id="myIntro">{props.children} I'm a web developer who lives and gets into all sorts of shenanigans in NYC.</h1>)
}

export default Intro