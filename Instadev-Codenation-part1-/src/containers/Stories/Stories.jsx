import React, { useState } from "react";

import Story from '../../components/Story';

import './Stories.scss';

const Stories = ({ stories, getUserHandler }) => {
  const showStory = false;
  return (
    <React.Fragment>
      <section className="stories" data-testid="stories">
        <div className="container">
          <button className="user__thumb user__thumb--hasNew">
            <div className="user__thumb__wrapper">
              <img
                src="https://viniciusvinna.netlify.app/assets//api-instagram/profiles/bruce/bruce-profile.jpg"
                alt="Bruce Wayne"
              />
            </div>
          </button>
          <button className="user__thumb false">
            <div className="user__thumb__wrapper">
              <img
                src="https://viniciusvinna.netlify.app/assets//api-instagram/profiles/domino/domino-profile.jpg"
                alt="Domino"
              />
            </div>
          </button>
          <button className="user__thumb false">
            <div className="user__thumb__wrapper">
              <img
                src="https://media-exp1.licdn.com/dms/image/C4E03AQGEOX3z7y-_Lw/profile-displayphoto-shrink_200_200/0?e=1591228800&v=beta&t=Iuvpl_-StJrxtGhhPRic1HPmIsKchjmRpE66EUO7QJ8"
                alt="Paloma Correa"
              />
            </div>
          </button>
        </div>
      </section>

      {showStory && (
        <Story />
        )}
    </React.Fragment>
  );
};

export default Stories;
