import React from "react";

import Contact from './Contact';

class Contacts extends React.Component {
	render() {
		const { filterData, search, theme } = this.props;
		return (
			<>
			<div data-testid="contacts" className="container">
				<section className="contacts">
					<article className="contact">
						<span className="contact__avatar" />
						<span className="contact__data">Nome</span>
						<span className="contact__data">Telefone</span>
						<span className="contact__data">País</span>
						<span className="contact__data">Admissão</span>
						<span className="contact__data">Empresa</span>
						<span className="contact__data">Departamento</span>
					</article>
				</section>
			</div>
			{
				filterData && filterData.map(contact => <Contact key={contact.id} data={contact} search={search} theme={theme} />)
			}
			</>
		);
	}
}

export default Contacts;
