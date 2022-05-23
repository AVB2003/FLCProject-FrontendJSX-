import React, { Component } from "react";
import './navbar.css'

export class Navbar extends Component {
  render() {
    return (
      <>
        <div className="nav">
        
        <h1>For lazy Coders</h1>
        <div className="setting">
            <div className="login" >
                <h4>Login</h4>
            </div>
            <img src="images/man.png" alt="" />
        </div>
    </div>
      </>
    );
  }
}

export default Navbar;
