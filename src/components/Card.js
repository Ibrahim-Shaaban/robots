import React, { Component } from 'react';
import './Card.css';



class Card extends Component {
  render() {
      const {robot} = this.props ;
      const {name ,id, email} = robot ; 
    return (
      
      <div className='card'>
          <img src={`https://robohash.org/${id}?size=200x200`} alt='robot' className='avatar' />
          <h2>{name}</h2>
          <p>{email}</p>
      </div>
    );
  }
}

export default Card;