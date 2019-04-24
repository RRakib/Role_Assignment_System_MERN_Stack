import React, { Component } from 'react'
import axios from "axios"

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email : "",
            password : ""
        }
    }
    handleChange = (e) => {
        const {name , value} = e.target;
        this.setState({
            [name] : value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            "email" : this.state.email,
            "password" : this.state.password
        }
        console.log(this.state)
        axios.post("/user/login", data)
            .then(res => console.log(res))
            .catch(err => console.log("ERROR! " + err))
    }

    
  render() {
    return (
      <div>
        <form onSubmit= {this.handleSubmit}>
            <input
                type="text"
                name = "email"
                value = {this.state.email}
                onChange = {this.handleChange}
            />
            <input 
                type="password"
                name = "password"
                value = {this.state.password}
                onChange = {this.handleChange}
            />
            <button>Login</button>
        </form>
      </div>
    )
  }
}

export default Login