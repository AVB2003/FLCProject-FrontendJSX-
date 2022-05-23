import React, { Component } from 'react'
import './content.css'

export class Image extends Component {

    render() {
    let {image} =  this.props;
    return (
      <>
       <div className="contentbox">
           <img src={image} alt="" />
       </div>
      </>
    )
  }
}

export default Image