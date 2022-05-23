import React, { Component } from "react";
import "./choice.css";

export class choice extends Component {
  render() {
    return (
      <>
      
        <div className="container">
          <div className="radio_container">
            <input type="radio" name="radio" id="one" />
            <label htmlFor="one">Web</label>
            <input type="radio" name="radio" id="two" />
            <label htmlFor="two">Flutter</label>
            <input type="radio" name="radio" id="three" />
            <label htmlFor="three">Blog </label>
          </div>
        </div>
      </>
    );
  }
}

export default choice;
