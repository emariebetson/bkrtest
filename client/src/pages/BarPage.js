
import React, {useState, useEffect} from "react";
import axios from "axios";


function BarPage() {

    

  const [barPosts, setBarPosts] =useState([]);
  const [avgTime, setAvgTime] = useState();
  const [urlName, setUrlName] = useState(window.location.href.substring(window.location.href.lastIndexOf('/') + 1));
  const [barName, setBarName] = useState();


  useEffect(() => {
    loadPosts(urlName);
    console.log(urlName);
  })

 

  function loadPosts() {
    
    // if (parsedInfo.isLoggedIn === 1) {
    //   console.log('there is a user logged in')
    // console.log(window.location)
    // }
    const query = 
    console.log(query)
    axios
      .get(`http://localhost:3002/api/bars/${urlName}`)
      .then(res => {
          console.log(res.data.posts);
        // console.log(res.data)
        // console.log(res.data)
        setBarName(res.data.barName)
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
       <h2>{barName}</h2>
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