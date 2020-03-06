import React, { Component, useState } from "react";
import axios from "axios";

function MakePost() {
  let userInfo = localStorage.getItem("newUser");
  let parsedInfo = JSON.parse(userInfo);
  const [barName, setBarName] = useState("");
  const [time, setTime]= useState("");


  function handleBarChange (event) {

    setBarName(event.target.value);
    console.log(barName)


  };

  function handleTimeChange (event) {

    setTime(event.target.value);
    console.log(time)

  }

  function handleFormSubmit (event) {
    // console.log(userName.match.params.id)
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    if (parsedInfo.username === null) {
      alert('please log in to continue.')
    } else {

      axios
      .post(
        "http://localhost:3002/api/posts",
        { barName: barName, time: time, username: parsedInfo.username },
        console.log("i made it into the frontend post route")
      )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });

    }
  

  }

  return (
    <div>
        <p>Hello {barName}</p>
        <form className="form" action="/action_page.php">
        <label for="bars">Choose a bar:</label>
          <select value={barName} name="barName" onChange={handleBarChange}>
          <option value="Select an option">Select an option</option>
            <option value="Danny's">Danny's</option>
            <option value="OGs">OGs</option>
            <option value="Hangge Uppe">Hangge Uppe</option>
            <option value="Happy Camper">Happy Camper</option>
          </select>
          <input
            value={time}
            name="time"
            onChange={handleTimeChange}
            type="number"
            placeholder="time"
          />
          <button onClick={handleFormSubmit}>Submit</button>
        </form>
      </div>

  )



}

export default MakePost;

// class MakePost extends Component {
  
//   // Setting the component's initial state
//   constructor(props){
//     super(props);
//   }
//   state = {
//     barName: "",
//     time: ""
//   };

  

//   handleInputChange = event => {
//     // Getting the value and name of the input which triggered the change
//     const name = event.target.name;
//     let value = event.target.value;
    

//     // Updating the input's state
//     this.setState({
//       [name]: value
//     });
//   };

//   handleFormSubmit = event => {
//     // Preventing the default behavior of the form submit (which is to refresh the page)
//     event.preventDefault();
//     if (!this.state.barName) {
//       alert("Fill out your barname please!");
//     }
//     console.log(this.state);
//     axios
//       .post(
//         "http://localhost:3001/api/posts",
//         { barName: this.state.barName, time: this.state.time, username: this.props.userInfo.username },
//         console.log("i made it into the frontend post route")
//       )
//       .then(res => {
//         console.log(res);
//         console.log(res.data);
//         this.setState({
//           barName: "",
//           time: ""
//         });
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };

//   render() {
//     // Notice how each input has a `value`, `name`, and `onChange` prop
//     return (
//       <div>
//         <p>Hello {this.state.barName}</p>
//         <form className="form" action="/action_page.php">
//         <label for="bars">Choose a bar:</label>
//           <select value={this.state.barName} name="barName" onChange={this.handleInputChange}>
//           <option value="Select an option">Select an option</option>
//             <option value="Danny's">Danny's</option>
//             <option value="OGs">OGs</option>
//             <option value="Hangge Uppe">Hangge Uppe</option>
//             <option value="Happy Camper">Happy Camper</option>
//           </select>
//           <input
//             value={this.state.time}
//             name="time"
//             onChange={this.handleInputChange}
//             type="number"
//             placeholder="time"
//           />
//           <button onClick={this.handleFormSubmit}>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default MakePost;
