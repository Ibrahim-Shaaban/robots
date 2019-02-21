import React, { Component } from 'react';
import './CardList.css';
import Card from './Card'



class CardList extends Component {
    
  render() {
    // console.log(this.props.robots[0]);
    const robots = this.props.robots ;

    
    return (
            robots.map((robot , index) => <Card key={index} robot={robot}  /> ) 
    );
  }
}

export default CardList;