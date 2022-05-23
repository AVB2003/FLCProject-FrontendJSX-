import React, { Component } from 'react'
import './search.css'

export class Search extends Component {
  render() {
    return (
      <>
       <div className="search">
        <input type="text" placeholder="Search" />
        <div className="search_btn">

            <i className="fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
      </>
    )
  }
}

export default Search
