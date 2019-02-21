import React, { Component } from 'react';
import './Search.css';




class Search extends Component {
    
  render() {
    return(
        <div>
        <input 
        type='serach'
        className ='search'
        placeholder='search for robots'
        onChange ={this.props.onChange}
        />
        </div>
    );
  }
}

export default Search;