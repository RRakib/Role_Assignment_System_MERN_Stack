import axios from "axios"
import React, { Component } from 'react'
import Background from "../../Image/background.webp"

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
      <div className="login">
        {/* Background */}
        <div className="backgroundShadow"></div>
        <img src={Background} alt="Login background"/>
        <form onSubmit= {this.handleSubmit}>
            <h1>Register</h1>
            <input 
                type="name"
                name = "name"
                value = {this.state.name}
                onChange = {this.handleChange}
                placeholder = "Please Enter Your Name"
            />  
            <br />
            <input
                type="text"
                name = "email"
                value = {this.state.email}
                onChange = {this.handleChange}
                placeholder = "Please Enter Your Email"
            />
            <br />
            <input 
                type="password"
                name = "password"
                value = {this.state.password}
                onChange = {this.handleChange}
                placeholder = "Please Enter Your Password"
            />
            <br />
            <button>Register</button>
        </form>
        <br />
        <h1 style={{color: "lightgreen"}}>{this.state.congrats}</h1>
      </div>
    )
  }
}

export default Register