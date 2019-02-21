import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList';
import Search from '../components/Search';



class App extends Component {
  constructor(){
    super()
    this.state = {
        robots : [],
        robotName :''
    }
}

onChange = (event) => {
  // console.log(event.target.value) ;
  this.setState({robotName : event.target.value})
}

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users => {this.setState({ robots: users})});
}
  render() {
    const {robots ,robotName} = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(robotName);
    })
    if(this.state.robots.length === 0) return <h1>Loading</h1>
    else
    {return (
      
      <div style={{textAlign :'center'}}>
        <Search onChange={this.onChange} />
        <CardList robots={filteredRobots} />
      </div>
    );}
    
  }
}

export default App;
