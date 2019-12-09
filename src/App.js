import React, { Component } from 'react';
import './App.css';
class App extends Component {
  state = {
    joke :{},
    punchLineText :'',
    punchLine :""
  }
  componentDidMount(){
    //fetching random jokes from an api using fetch request
    fetch('https://official-joke-api.appspot.com/random_joke')
    .then(res => res.json())
    .then(joke => {
      //storing joke in an array jokes
      this.setState({
        joke : joke
      })
      console.log('checking data',joke)
    })
    //setting timelimit to show the punchline after 5 seconds.
    setTimeout(() => {
    this.setState({
      punchLineText: 'PunchLine:',
      punchLine :this.state.joke['punchline']
    })
    }, 5000);

  }
  render(){
    return (
      <div className = "App-header">
      <div>{`Programming Jokes {:`}</div>
      <div>SetUp:{this.state.joke['setup']}</div>
      <div className = "App">{this.state.punchLineText } {this.state.punchLine}</div>
      <button className = "button">AddProgrammingJokes</button>
      </div>
    )
  }
}

export default App;
