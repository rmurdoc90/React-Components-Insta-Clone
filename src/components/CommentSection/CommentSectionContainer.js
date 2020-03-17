// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  const [comment] = useState(props.comments)
  console.log(comment)

  return (
    <div>
       {comment.map ((e,x) =>(
      <Comment postComment = {e} key={x}/>
       ))}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
