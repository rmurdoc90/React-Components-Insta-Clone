// You do not need to do anything in this file. Look at the CommentSection file. 

import React from 'react';
import './Comment.css';

const Comment = ({postComment}) => {
  return (
    <div className="comment-text">
      <span className="user">{postComment.username}</span>
      {' '}
      <span className="comment">{postComment.text}</span>
    </div>
  );
};


export default Comment;
