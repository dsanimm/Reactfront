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
userName: '',
nameError: ''
        }
    }
    onClick = ($event) => {
      console.log('save button is clicked',$event);
      window.open(this.url,"_blank");
    }
    onNameChange= (event) => {
      console.log("value is ", event.target.value);
      let firstNamePattern = RegExp('^[A-Z]{1}[a-z]{2,}$');
      if (firstNamePattern.test(event.target.value)) {
      this.setState({ userName: event.target.value})
      this.setState({ nameError: ''})
      }
      else
      this.setState({ nameError: 'Invalid'})
    }
    render() {
        return ( 
          <>
        <div>
            <h1> Hello { this.state.userName} from BridgeLabz</h1>     
            <img src = {logo} onClick={this.onClick}
            alt = "The Bridgelabz logo"/>
            </div>
            <div class="inp">
              <input onChange={this.onNameChange} />
        <span className="error-output">{this.state.nameError}</span>
            </div>
            <p>At BridgeLabz, we're a techie community of</p>
    <ul>
        <li>technologists</li>
        <li>thinkers</li>
        <li>builders</li>
    </ul>
    <p>Working together to keep the Tech Employability of Engineers alive and accessible,
        so Tech Companies worldwide can get contributers and creators for Technology Solutions.
        We believe this act of human collaboration across and employability platform is essential
        to individual growth and our collective future</p>
    <p>To know about us, visit <a href="https://www.bridgelabz.com/">BridgeLabz</a>
        to learn even more about our mission i.e. <strong>Employability to all</strong></p>

            </>
        );
    }
}

export default App;