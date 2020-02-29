import React, {useState, useEffect} from "react";
import MakePost from '../components/MakePost';
import UserContext from '../utils/UserContext'
import axios from "axios";


function NewsFeed(props) {
  // console.log(userState);
  const [newsFeedPosts, setNewsFeedPosts] =useState([]);

  useEffect(() => {
    loadPosts();
    // console.log(props)
  })
  // function deletePost(_id) {
  //     axios.delete(_id)
  //     .then(res => loadPosts())
  //     .catch(err => console.log(err));
  // }

  function loadPosts() {
    axios
    .get("http://localhost:3001/api/posts")
    .then(res => {
      setNewsFeedPosts(res.data)
      })
  }

  return (
    <>
    <MakePost userInfo={props.userInfo}></MakePost>
    <br></br>
    <div>This is the current newsfeed: {props.userInfo.isLoggedIn}, {props.userInfo.username}</div>
    {newsFeedPosts.map(post => {
                  return (
                    <div key={post._id}>{post.username}: At {(post.date)}
                        <strong>
                          {post.barName}:  
                        </strong>
                        <span> had a {post.time} minute wait</span>
                        {/* <button onClick={() => deletePost(post._id)}>Delete</button> */}
                    </div>
                  );
                })}
    </>
  )
  
    
}

export default NewsFeed;
