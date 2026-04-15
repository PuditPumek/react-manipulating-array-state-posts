import React from "react";
import { postData } from "../raw-data/post-data";

function Posts() {

  const [posts, setPosts] = React.useState(postData);
  const [sortBy, setSortBy] = React.useState("id");

  const handleLike = (postId) => {
    setPosts(posts.map((post) => {
      if (post.id === postId) {
        return {...post, likes: post.likes + 1};
      }
      return post;
    }));
  };

  const handleDislike = (postId) => {
    setPosts(posts.map((post) => {
      if (post.id === postId) {
        return {...post, likes: post.likes - 1};
      }
      return post;
    }));
  };

  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <div class="post-list">
        {posts.map((post) => (
          <div class="post-item" key={post.id}>

          <div class="post-header">
            <h2>{post.title}</h2>
            <div class="post-social-media-stats">
              <span class="stats-topic">Likes: </span>
              <span class="post-likes">{post.likes}</span>
            </div>
          </div>
          <p class="post-content">
            {post.content}
          </p>
          <div class="post-actions">
            <button class="like-button" onClick={() => handleLike(post.id)}>Like</button>
            <button class="dislike-button" onClick={() => handleDislike(post.id)}>Dislike</button>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
