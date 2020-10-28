import React from 'react';
import { ReactComponent as LogoSvg } from "../assets/img/logo.svg";
import { ReactComponent as LogoSvgWhite } from "../assets/img/logo_white.svg";


class Topbar extends React.Component {
	render() {
		const { theme } = this.props;
		const theming = theme ? 'top' : '';

		return (
			<header data-testid="topbar" className={`topbar ${theming}`}>
				<div className="container">
					<a href="/" className="topbar__logo">
						{
							theme ? <LogoSvgWhite alt="Logo Instagram" /> : <LogoSvg alt="Logo Instagram" />
						}
					</a>

					<div className="toggle">
						<input type="checkbox" className="checkbox" id="chk" onClick={this.props.handleTheme} />
						<label className="label" htmlFor="chk">
							<i className="fas fa-moon"></i>
							<i className="fas fa-sun"></i>
							<div className="ball"></div>
						</label>
					</div>
				</div>
			</header>
		);
	}
}

export default Topbar;