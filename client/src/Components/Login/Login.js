import axios from "axios"
import Admin from "../Admin/Admin"
import React, { Component } from 'react'

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email : "",
            password : "",
            authenticate : "",
            welcome : "",
            emails : "",
            admin : false,
            clicked : false
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
        this.setState({
            admin: false
        })
        axios.post("/user/login", data)
            .then(res => {
                if(res.data.warning){
                    this.setState({authenticate : res.data.warning})
                } else{
                    this.setState({welcome : res.data.welcome})
                    if(res.data.emails.length > 0){
                        this.setState({
                            emails : res.data.emails,
                            admin : res.data.admin,
                            clicked : false,
                        })
                    }
                }})
            .catch(err => console.log("ERROR! " + err))
        
        this.setState({
            email : '',
            password : '',
            authenticate : "",
            welcome : ""
        })
    }

    
  render() {
      console.log(this.state.clicked, this.state.admin)
    return (
      <div>
        <form onSubmit= {this.handleSubmit}>
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
            <button>Login</button>
        </form>
        <br />
        <h2 style={{color : 'red'}}> {this.state.authenticate}</h2>
        <h2 style={{color : 'green'}}> {this.state.welcome}</h2>

        {this.state.admin || this.state.clicked? (<Admin emails = {this.state.emails} admin = {this.state.clicked}/>) : null}
      </div>
    )
  }
}

export default Login