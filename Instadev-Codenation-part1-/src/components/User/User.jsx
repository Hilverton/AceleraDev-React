import React from 'react';

import { Link } from 'react-router-dom';

const User = ({ infoUser })  => {
  const {avatar, name, username, } = infoUser;

  return (
    <article className="post" data-testid="user">
      <header className="post__header">
        <Link to="/users/brucewayne" className="user">
          <div className="user__thumb">
            <img src="https://viniciusvinna.netlify.app/assets//api-instagram/profiles/bruce/bruce-profile.jpg" alt="Bruce Wayne"/>
          </div>
        </Link>
        <div className="user__name">Bruce Wayne</div>
      </header>
    </article>
  )
};

export default User;
