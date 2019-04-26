import axios from "axios"
import React, { Component } from 'react'

class Admin extends Component {
    constructor(){
        super();
        this.state = {
            emails : "",
            type : "",
            success : ""
        }
    }
    handleChange = (e) => {
        const {name,value} = e.target;
        this.setState({
            [name] : value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let data = {"emails" : this.state.emails, "type" : this.state.type}
        axios.post("/update" , data)
            .then(res => {if(res){this.setState({success: "Successfully Assigned Role"})}})
            .catch(err => {console.log("Error " + err)})
    }
    handleSubmit2 = () => {
        window.location.reload();
    }


  render() {
    console.log(this.props)
    const emails = this.props.emails.length > 0 ? (
        this.props.emails.map(items => {
            return(
                        <option key={items._id} value={items.emails}>{items.email}</option>
            )
        })
    ) : null
    return (
      <div className="login" style={{padding : 0}}>
        <form onSubmit={this.handleSubmit}>
            <select name="emails" onChange={this.handleChange} value={this.state.emails}>
                <option>Select An Email</option>
                {emails}
            </select>
            <br />
            <select name="type" onChange={this.handleChange} value={this.state.type}>
                <option>Select An Email</option>
                <option value = "Designer">Designer</option>
                <option value = "Programmer">Programmer</option>
            </select>
            <br />
            <button>Assign</button>
        </form>
        <br />
        <h2 style={{color : "lightgreen"}}>{this.state.success}</h2>
        {this.props.welcome && (<button onClick={this.handleSubmit2}>LogOut</button>)}
      </div>
    )
  }
}

export default Admin