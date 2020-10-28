import React from 'react';

class Contact extends React.Component {
  render() {
    const { data } = this.props;
    const date = new Date(data.admissionDate).toLocaleDateString('pt-BR');
    return (
      <div className="container">
        <div data-testid="contact" className="contact" key={data.id}>
          <div className="contact__avatar">
            <img className="contact__img" src={data.avatar} alt="Avatar"/>
          </div>
          <span className="contact__info contact__info--name">{data.name}</span>
          <span className="contact__info">{data.phone}</span>
          <span className="contact__info">{data.country}</span>
          <span className="contact__info">{date}</span>
          <span className="contact__info">{data.company}</span>
          <span className="contact__info">{data.department}</span>
        </div>
      </div>
    );
  }
}

export default Contact;
