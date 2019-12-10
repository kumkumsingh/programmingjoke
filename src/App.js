import React, { Component } from "react";
import "./App.css";
import {
  FacebookShareButton,
  WhatsappShareButton,
  FacebookIcon,
  WhatsappIcon
} from "react-share";
class App extends Component {
  state = {
    joke: {},
    punchLineText: "",
    punchLine: ""
  };
  componentDidMount() {
    //fetching random jokes from an api using fetch request
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then(res => res.json())
      .then(joke => {
        //storing joke in an array jokes
        this.setState({
          joke: joke
        });
        console.log("checking data", joke);
      });
    //setting timelimit to show the punchline after 5 seconds.
    setTimeout(() => {
      this.setState({
        punchLineText: "PunchLine:",
        punchLine: this.state.joke["punchline"]
      });
    }, 5000);
  }
  //Function to refresh the page to get new jokes.
  refreshPage = () => {
    window.location.reload();
  };
  render() {
    return (
      <div className="App-header">
        <div>{`Programming Jokes {:`}</div>
        <div>{this.state.joke ? this.state.joke["setup"] : "Loading"}</div>
        <div className="App">
          {this.state.punchLineText} {this.state.punchLine}
        </div>
        <div>
          <button className="button" onClick={this.refreshPage}>
            RefreshJokes
          </button>
          <div>
            Share:
            <WhatsappShareButton
              url="https://web.whatsapp.com/"
              title={`Joke : ${this.state.joke["setup"]}\n PunchLine : ${this.state.joke["punchline"]}`}
              separator=""
            >
              <WhatsappIcon size={60} round logoFillColor="white" />
            </WhatsappShareButton>
          </div>
          <div>
            <FacebookShareButton
              url="https://www.facebook.com"
              quote={`Joke : ${this.state.joke["setup"]}\n PunchLine : ${this.state.joke["punchline"]}`}
              hashtag="#Programming Joke"
              separator=""
            >
              <FacebookIcon size={60} round logoFillColor="white" />
            </FacebookShareButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
