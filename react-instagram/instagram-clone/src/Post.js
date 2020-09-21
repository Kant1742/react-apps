import React from 'react';
import './post.css';
import Avatar from "@material-ui/core/Avatar";

function Post({ username, caption, imageUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="AlexCher"
          src="/static/images/avatar/1.jpg"
        />
        <h3>{username}</h3>
      </div>
      {/* Header avatar+username */}
      <img className="post__image" src="https://instagram.fhrk1-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/117386080_626874231581903_6302773642529170658_n.jpg?_nc_ht=instagram.fhrk1-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=gCiacJ6_RUUAX8JVYmL&oh=7d0829e6401640f438da5286c02e4928&oe=5F5BE369" alt="" />

      <h4 className="post__text"><strong>{username}</strong>: {caption}</h4>
    </div>
  )
}

export default Post
