import React, { Component } from "react";
import axios from 'axios';

class MakePost extends Component {
  // Setting the component's initial state
  state = {
    barName: "",
    time: "",
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.barName) {
      alert("Fill out your barname please!");
    } 
    console.log(this.state);
    axios.post('http://localhost:3001/api/posts', { barName: this.state.barName, time: this.state.time },
    console.log( 'i made it into the frontend post route'))   
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.setState({
          barName: "",
          time: ""
        })
      }).catch(error => {
        console.log(error)
      })

  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Hello {this.state.barName}
        </p>
        <form className="form">
          <input
            value={this.state.barName}
            name="barName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="barName"
          />
          <input
            value={this.state.time}
            name="time"
            onChange={this.handleInputChange}
            type="number"
            placeholder="time"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default MakePost;
