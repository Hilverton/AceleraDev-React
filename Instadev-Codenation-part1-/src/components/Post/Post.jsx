import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Post.scss';

const Post = ({ postInfo, userInfo }) => {
  return (
    <article className="post" data-testid="post">
      <header className="post__header">
        <div className="user">
          <Link to="/users/brucewayne">
            <img className="user__thumb" src="https://viniciusvinna.netlify.app/assets//api-instagram/profiles/bruce/bruce-profile.jpg" alt="Bruce Wayne" />
          </Link>
          <Link to="/users/brucewayne" className="user__name">Bruce Wayne</Link>
        </div>
        <button className="post__context">
          <span className="follow-btn">Seguir</span>
        </button>
      </header>
      <figure className="post__figure">
        <img src="https://viniciusvinna.netlify.app/assets//api-instagram/profiles/bruce/bruce-1.jpg" alt="Bruce Wayne"/>
      </figure>
      <nav className="post__controls">
        <button className="post__control">
          <i className="far fa-heart"></i>
        </button>
        <div className="post__status">
          <div className="user">
            <span>Curtido por <Link to="/">Lamont Kohler</Link> e outra  <Link to="/">1 pessoa</Link></span>
          </div>
        </div>
      </nav>
    </article>
  );
};

export default Post; 
