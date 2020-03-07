
import React, {useState, useEffect} from "react";
import axios from "axios";


function BarPage() {


  const [barPosts, setBarPosts] =useState([]);
  const [avgTime, setAvgTime] = useState();

  useEffect(() => {
    loadPosts();
  })

  function loadPosts() {
    
    // if (parsedInfo.isLoggedIn === 1) {
    //   console.log('there is a user logged in')
    // console.log(window.location)
    // }
    axios
      .get("http://localhost:3002/api/bars/OGs")
      .then(res => {
        console.log(res.data)
        // console.log(res.data)
        setBarPosts(res.data.posts)
        // console.log(barPosts)
        let avg; 
        // res.data.posts.forEach(post => {
        //     console.log(post.time);
        // })
      })
    }

  
 return (
   <div>
   {barPosts.map(post => {
                 return (
                   <div key={post._id}>{post.username}:
                  
                         this bar  
                   
                         <span> had a {post.time} minute wait at {post.date}</span>
                   </div>)}
 )}</div>

 )

  
}

export default BarPage;