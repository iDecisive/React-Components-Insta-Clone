//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import dummyData from "../../dummy-data";

const PostsPage = props => {
  // set up state for your data

  const [postData] = useState(dummyData)

  let postDataMapped = postData.map(item => <Post post={item} key={item.id} />); //Took your advice Jessica

  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {postDataMapped}
    </div>
  );
};

export default PostsPage;
