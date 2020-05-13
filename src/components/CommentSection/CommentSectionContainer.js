// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments

  const [comments, setComments] = useState(props.comments)

  let mapComments = props.comments.map(item => {

    return (

      <Comment comment={item}/>

    )
  })

  let addComment = _ => {

    let newCommentIndex = props.comments.length + 1;

    setComments({username: "testName",
    text: "Testcomment"})

  }

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {mapComments}
      <CommentInput submitComment={setComments}/>
    </div>
  );
};

export default CommentSection;
