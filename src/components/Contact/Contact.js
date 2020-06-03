import React, { Component } from "react";

class Contact extends Component {
    handleJoinUs = () =>{
        console.log('join us clicked')
    }
    
    render() {
        return(
            <div>
            <h2>Contact</h2>
            <input placeholder='First Name'/>
            <input placeholder='Last Name'/>
            <input placeholder='Best Impression'/>
            <button onClick={this.handleJoinUs}>Join Us!</button>
            <p>Phone: 1-800-WE-DIDIT</p>
            <p>Email: info@reactactors.com</p>
            </div>
        ) //end return
    } //end render
}// end class

export default Contact;