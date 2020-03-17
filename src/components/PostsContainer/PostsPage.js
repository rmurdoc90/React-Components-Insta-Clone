//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from '../../dummy-data';

const PostsPage = () => {
  const [data] = useState(dummyData);
  return (
    <div className="posts-container-wrapper">
      {data.map ((p,index) =>(
        <Post postContent = {p} key={index}/>
      ))}
    </div>
  );
};

export default PostsPage;

