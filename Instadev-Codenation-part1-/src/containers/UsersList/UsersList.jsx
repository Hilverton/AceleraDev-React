import React from 'react';

import User from '../../components/User';
import Loading from '../../components/Loading';

import './UsersList.scss';

const UersList = ({ users }) => {
  return (
    <section className="users-list" data-testid="user-list">
      <article className="post" data-testid="user">
        <header className="post__header">
          <a className="user" href="/users/brucewayne">
            <div className="user__thumb">
              <img
                src="https://viniciusvinna.netlify.app/assets//api-instagram/profiles/bruce/bruce-profile.jpg"
                alt="Bruce Wayne"
              />
            </div>
            <div className="user__name">Bruce Wayne</div>
          </a>
        </header>
      </article>
      <article className="post" data-testid="user">
        <header className="post__header">
          <a className="user" href="/users/mestrejedi">
            <div className="user__thumb">
              <img
                src="https://viniciusvinna.netlify.app/assets//api-instagram/profiles/yoda/yoda-profile.jpg"
                alt="Mestre Yoda"
              />
            </div>
            <div className="user__name">Mestre Yoda</div>
          </a>
        </header>
      </article>
      <article className="post" data-testid="user">
        <header className="post__header">
          <a className="user" href="/users/domino">
            <div className="user__thumb">
              <img
                src="https://viniciusvinna.netlify.app/assets//api-instagram/profiles/domino/domino-profile.jpg"
                alt="Domino"
              />
            </div>
            <div className="user__name">Domino</div>
          </a>
        </header>
      </article>
    </section>
  )
};

export default UersList;
