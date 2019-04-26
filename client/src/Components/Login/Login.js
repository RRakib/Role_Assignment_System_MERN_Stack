import "./Login.css"
import axios from "axios"
import Admin from "../Admin/Admin"
import React, { Component } from 'react'
import Background from "../../Image/background.webp"

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
            admin: false,
            clicked : true,
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
    handleSubmit2 = () => {
        window.location.reload();
    }

    
  render() {
      console.log(this.state.clicked)
    return (
      <div className="login">
        {/* Background */}
        <div className="backgroundShadow"></div>
        <img src={Background} alt="Login background"/>

        {/* Form */}
        <form onSubmit= {this.handleSubmit} style={{display : this.state.clicked? "none" : "block"}}>
            <h1>Login</h1>
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
            <button>Login</button>
        </form>
        <br />
        <h1 style={{color : '#ff5722'}}> {this.state.authenticate}</h1>
        <h1 style={{color : 'lightgreen'}}> {this.state.welcome}</h1>
        {this.state.admin? (<Admin emails = {this.state.emails} admin = {this.state.clicked} welcome={this.state.welcome} />) : null}
        {this.state.welcome && (<button onClick={this.handleSubmit2}>LogOut</button>)}

      </div>
    )
  }
}

export default Login