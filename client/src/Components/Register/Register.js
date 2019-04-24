import React, { Component } from 'react'
import axios from "axios"

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : "",
            email : "",
            password : "",
            congrats : "",
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
            "password" : this.state.password,
            "name" : this.state.name
        }
        console.log(this.state)
        axios.post("/user", data)
            .then(res => {if(res){this.setState({congrats : "Congratulation! You are registered"})}})
            .catch(err => console.log("ERROR! " + err))
        
        this.setState({
            email : '',
            password : '',
            name : ""
        })
    }

    
  render() {
    return (
      <div>
        <form onSubmit= {this.handleSubmit}>
            <input 
                type="name"
                name = "name"
                value = {this.state.name}
                onChange = {this.handleChange}
                placeholder = "Please Enter Your Name"
            />  
            <input
                type="text"
                name = "email"
                value = {this.state.email}
                onChange = {this.handleChange}
                placeholder = "Please Enter Your Email"
            />
            <input 
                type="password"
                name = "password"
                value = {this.state.password}
                onChange = {this.handleChange}
                placeholder = "Please Enter Your Password"
            />
            <button>Register</button>
        </form>
        <br />
        <h1 style={{color: "#333"}}>{this.state.congrats}</h1>
      </div>
    )
  }
}

export default Register