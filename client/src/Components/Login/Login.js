import React, { Component } from 'react'
import axios from "axios"

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email : "",
            password : "",
            authenticate : "",
            welcome : "",
            emails : ""
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
            .then(res => {
                if(res.data.warning){
                    this.setState({authenticate : res.data.warning})
                } else{
                    this.setState({welcome : res.data.welcome})
                    if(res.data.emails.length > 0){
                        this.setState({
                            emails : res.data.emails
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
      console.log(this.state.emails)
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

            {this.state.emails.length > 0 ? (<p>{this.state.emails.map(items => {return items.email})}</p>) : null}
      </div>
    )
  }
}

export default Login