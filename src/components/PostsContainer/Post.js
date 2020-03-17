// You will add code in this file
import React, {useState} from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";
import "./PostsPage";
import "./Posts.css";

// pass props in this file to
const Post = ({postContent}) => {
  const [likes , setLikes] = useState(postContent.likes);

  const incrementLikes = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="post-border">
      <PostHeader
        username={postContent.username}
        thumbnailUrl={
          postContent.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={postContent.imageUrl}
        />
      </div>
      <LikeSection likes = {likes} incrementLikes = {incrementLikes}/>
      <CommentSection
        postId={postContent.imageUrl}
        comments={postContent.comments}
      />
    </div>
  );
};

export default Post;


