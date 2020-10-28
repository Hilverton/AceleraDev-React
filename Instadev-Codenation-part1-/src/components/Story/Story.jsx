import React, { useCallback, useState } from "react";

import { Link } from 'react-router-dom';

import './Story.scss';

const Story = ({ story, user, handleClose }) => {
  return (
    <section className="story" data-testid="story">
      <div className="container">
        <header className="story__header">
          <div className="user">
            <Link to="/users/brucewayne" className="user__thumb">
              <img src="https://viniciusvinna.netlify.app/assets//api-instagram/profiles/bruce/bruce-profile.jpg" alt="Bruce Wayne" />
            </Link>
            <Link to="/users/brucewayne" className="user__name">Bruce Wayne</Link>
          </div>
          <button className="story__close">
            <i className="fas fa-times" />
          </button>
        </header>
        <div className="story__progress">
          <div className="story__progress__elapsed"></div>
        </div>
      </div>
      <div className="container">
        <section className="story__video__wrapper">
          <video
            autoPlay=""
            className="video-player"
            loop=""
            playsInline=""
            src="https://viniciusvinna.netlify.app/assets/api-instagram/profiles/bruce/bruce-stories.mp4"
          />
        </section>
      </div>
    </section>
  );
};

export default Story;
