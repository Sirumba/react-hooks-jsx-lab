import React from "react";
import { image } from "../data/data";

function About() {
  const img = "I made this"
  return <div id="about">
    <h2>About Me</h2>
    <p>ADUhiBvckjAxbck</p>
    <img src={image} alt={img} />
  </div>;
}

export default About;
