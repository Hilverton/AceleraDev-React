import React from 'react';

  function Highlight({ text, search }) {
    const regex = new RegExp(`(${search})`, 'i');
    return text.split(regex).map((part, id) => {
      if (part.toLowerCase() === search.toLowerCase()) {
        return <mark key={id}>{part}</mark>
      } else {
        return part;
      }
    });
  }

class Contact extends React.Component {
  render() {
    const { data, search, theme } = this.props;
    const date = new Date(data.admissionDate).toLocaleDateString('pt-BR');
		const theming = theme ? 'dark' : '';
    return (
      <div className="container">
        <div data-testid="contact" className={`listContact ${theming}`} key={data.id}>
          <div data-testid="contact-avatar" className="listContact__avatar">
            <img className="listContact__img" src={data.avatar} alt="Avatar"/>
          </div>
          <span data-testid="contact-name" className="listContact__info listContact__info--name"><Highlight text={data.name} search={search} /></span>
          <span data-testid="contact-phone" className="listContact__info">{data.phone}</span>
          <span data-testid="contact-country" className="listContact__info">{data.country}</span>
          <span data-testid="contact-date" className="listContact__info">{date}</span>
          <span data-testid="contact-company" className="listContact__info">{data.company}</span>
          <span data-testid="contact-department" className="listContact__info">{data.department}</span>
        </div>
      </div>
    );
  }
}

export default Contact;
