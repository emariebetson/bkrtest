import React, { Component, useState, useEffect } from 'react';
import { LineChart, Line } from 'recharts';
import axios from 'axios';

class Chart extends React.Component {
  
//   useEffect(() => {
//     dataCall();
//     // console.log(urlName);
//   })




//  function dataCall () {
    
//   }
  
   render() {
    return (
      
      <div>
        <div>{console.log(this.props.data)}</div>
  <LineChart width={400} height={400} data={this.props.data}>
    <Line type="monotone" dataKey="time" stroke="#8884d8" />
  </LineChart>
      </div>
    );
   }
  }

export default Chart;