import React from 'react';

class Filters extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: '',
		}
	}

	callback(type, e) {
		this.props.handleClick(type);
		if (this.state.selected === e.target.name) {
			this.setState({ selected: ''});	
		} else {
			this.setState({ selected: e.target.name});
		}
	}

	render() {
		const { selected } = this.state;
		const nome = selected === 'Nome' ? 'is-selected' : '';
		const pais = selected === 'Pais' ? 'is-selected' : '';
		const emp = selected === 'Emp' ? 'is-selected' : '';
		const dep = selected === 'Dep' ? 'is-selected' : '';
		const adm = selected === 'Adm' ? 'is-selected' : '';
		return (
		  <div data-testid="filters" className="container">
			  <section className="filters">
				<div className="filters__search">
				<input 
					type="text" 
					className="filters__search__input" 
					placeholder="Pesquisar" 
					onChange={(e) => this.props.handleSearch(e)}
					value={this.props.value} 
				/>

				<button className="filters__search__icon">
					<i className="fa fa-search"/>
				</button>
				</div>

				<button name="Nome" className={`filters__item ${nome}`} onClick={(e) => this.callback('name', e)}>
				Nome <i className="fas fa-sort-down" />
				</button>

				<button name="Pais" className={`filters__item ${pais}`} onClick={(e) => this.callback('country', e)}>
				País <i className="fas fa-sort-down" />
				</button>

				<button name="Emp" className={`filters__item ${emp}`} onClick={(e) => this.callback('company', e)}>
				Empresa <i className="fas fa-sort-down" />
				</button>

				<button name="Dep" className={`filters__item ${dep}`} onClick={(e) => this.callback('department', e)}>
				Departamento <i className="fas fa-sort-down" />
				</button>

				<button name="Adm" className={`filters__item ${adm}`} onClick={(e) => this.callback('admissionDate', e)}>
				Data de admissão <i className="fas fa-sort-down" />
				</button>
			  </section>
		  </div>
		);
	}
}

export default Filters;
