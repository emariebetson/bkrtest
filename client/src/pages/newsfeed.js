
import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import MakePost from '../components/MakePost';
import axios from "axios";
import SimpleMap from "./../components/map";

function NewsFeed() {

  let userInfo = localStorage.getItem("newUser");
  let parsedInfo = JSON.parse(userInfo);

  const [newsFeedPosts, setNewsFeedPosts] =useState([]);

  useEffect(() => {
    loadPosts();
  })

  function loadPosts() {
    
    // if (parsedInfo.isLoggedIn === 1) {
    //   console.log('there is a user logged in')
    // }
    axios
      .get("http://localhost:3002/api/posts")
      .then(res => {
        console.log(res.data)
        setNewsFeedPosts(res.data)
      })
    }

  
 return (
   <div>
      <MakePost></MakePost>
   {newsFeedPosts.map(post => {
                 return (
                   <div key={post._id}>{post.username}: At {(post.date)}, 
                       <strong>
                         <Link to={`/bars/${post.urlName}`}>{post.barName}</Link>:  
                         </strong>
                         <span> had a {post.time} minute wait</span>. Comment: {post.comment}. Bouncer experience: {post.bouncer}.
                   </div>)}
 )}</div>

 )

  
}

export default NewsFeed;
