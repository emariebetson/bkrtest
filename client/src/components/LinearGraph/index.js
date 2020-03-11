import React, {Component} from 'react';
import {HorizontalBar, Line} from 'react-chartjs-2';
import axios from 'axios';
const hour8 = [];
const hour9 = [];
const hour10 = [];
const hour11 = [];
const hour12 = [];
const hour1 = [];
const hour2 = [];

axios
  .get(`http://localhost:3002/api/posts/danny's/Sunday`)
  .then(res => {
    res.data.forEach(post => {
      if (post.formattedDate === '8 pm') {
        hour11.push(post.time)
      }
      if (post.formattedDate === '9 pm') {
        hour11.push(post.time)
      }
      if (post.formattedDate === '10 pm') {
        hour11.push(post.time)
      }
      if (post.formattedDate === '11 pm') {
        hour11.push(post.time)
      }
    })
  });



const data = {
  labels: ['8pm', '9pm', '10pm', '11pm', '12pm', '1am', '2am'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [hour8, hour9, hour10, hour11, 56, 55, 40]
    }
  ]
};

class LinearGraph extends React.Component {
  // displayName: 'BarExample'

  render() {
    return (
      <div>
        <h2>Horizontal Bar Example</h2>
        <HorizontalBar data={data} />
      </div>
    );
  }
};

export default LinearGraph;


