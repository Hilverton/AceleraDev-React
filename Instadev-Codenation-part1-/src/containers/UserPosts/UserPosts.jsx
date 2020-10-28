import React from 'react';

import Post from '../../components/Post';

import './UserPosts.scss';

const UserPosts = ({ posts }) => (
  <div className="container" data-testid="user-posts">
    <section className="user-posts">
      <article className="post" data-testid="post">
          <figure className="post__figure">
            <img src="https://viniciusvinna.netlify.app/assets//api-instagram/profiles/bruce/bruce-1.jpg" alt=""/>
          </figure> 
      </article>
      <article className="post" data-testid="post">
          <figure className="post__figure">
            <img src="https://viniciusvinna.netlify.app/assets//api-instagram/profiles/bruce/bruce-2.jpg" alt=""/>
          </figure>
      </article>
      <article className="post" data-testid="post">
          <figure className="post__figure">
            <img src="https://viniciusvinna.netlify.app/assets//api-instagram/profiles/bruce/bruce-3.jpg" alt=""/>
          </figure>
      </article>
    </section>
  </div>
);

export default UserPosts;
