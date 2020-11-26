import './App.css';
import logo from './assets/img/logo.png'

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */
import React from 'react';
class App extends React.Component {
  url = 'https://www.bridgelabz.com/'
    constructor() {
        super()
        this.state = {
            title: 'hello from BridgeLabz'
        }
    }
    onClick = ($event) => {
      console.log('save button is clicked',$event);
      window.open(this.url,"_blank");
    }
    render() {
        return ( <div>
            <h1> { this.state.title } </h1>     
            <img src = {logo} onClick={this.onClick}
            alt = "The Bridgelabz logo"/>
            </div>
        );
    }
}

export default App;