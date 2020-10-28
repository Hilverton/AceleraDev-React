import React, { useState } from 'react';

import SuccessMessage from '../../components/SuccessMessage';

import './UserForm.scss';

const UserForm = () => {
  const success = false;
  return (
    <React.Fragment>
      <section className="profiile" data-testid="user-form">
        <div className="container">
          <div className="profile-data">
            <div className="user">
              <div className="user__thumb">
                <img src="https://viniciusvinna.netlify.app/assets/api-instagram/profiles/profile-placeholder.png" alt=""/>
              </div>
              <p className="user__name">Profile<span>@placeholder</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="post__form">
        <div className="container">
          <div className="post__form__wrapper">
            <label>Nome</label>
            <input
              type="text"
              placeholder="Ex: Fulano da Silva"
            />

            <label>Usuário</label>
            <input
              type="text"
              placeholder="Ex: fulano_da_silva"
            />

            <label>Email</label>
            <input
              type="email"
              placeholder="Ex: fulano@provedor.com"
            />

            <label>Url da Imagem de Perfil (use a url da imagem do Linkedin)</label>
            <input
              type="text"
              placeholder="http://..."
            />

            <button type="button">Cadastrar</button>
          </div>
        </div>
      </section>

      {success && <SuccessMessage />}
    </React.Fragment> 
  );
};

export default UserForm;
