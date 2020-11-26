import './home.css';
import React from 'react';
import logo from '../../assets/img/logo.png';

class Home extends React.Component {
    url = "https://www.youtube.com/"
    constructor() {
        super()
        this.state = {
            userName: '',
            nameError: ''
        }
    }
    onClick = ($event) => {
        console.log("Save Button is Clicked : ", $event);
        window.open(this.url, "_blank");
    }
    onNameChange = (event) => {
        console.log("value is : ", event.target.value);
        const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
        this.setState({ userName: event.target.value })
        if (nameRegex.test(event.target.value) || event.target.value.length === 0) {
            this.setState({ nameError: '' })
        } else {
            this.setState({ nameError: 'Name is Incorrect !' })
        }
    }
    render() {
        return (
            <>
                <div><h1>Hello ! {this.state.userName} from BridgeLabz !</h1>
                    <img src={logo} onClick={this.onClick} alt="Logo For BridgeLabz" />
                </div>
                <div className="text-box">
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
export default Home; 