import React, { Component } from 'react';

class navigation extends Component{
	render(){
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			  <a className="navbar-brand" href="#">{ this.props.company }</a>
			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>
			  <div className="collapse navbar-collapse" id="navbarNav">
			    <ul className="navbar-nav">
			      <li className="nav-item active">
			        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
			      </li>
			      <li className="nav-item">
			        <a className="nav-link" href="#">Features</a>
			      </li>
			      <li className="nav-item">
			        <a className="nav-link" href="#">Pricing</a>
			      </li>
			      <li className="nav-item">
			        <a className="nav-link disabled" href="#">Disabled</a>
			      </li>
			      <li className="nav-item">
			        <a className="nav-link" href="#">Features</a>
			      </li>
			      <li className="nav-item">
			        <a className="nav-link" href="#">Pricing</a>
			      </li>
			      <li className="nav-item">
			        <a className="nav-link" href="#">Features</a>
			      </li>
			      <li class="nav-item dropdown">
			        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			          Dropdown
			        </a>
			        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
			          <a class="dropdown-item" href="#">Action</a>
			          <a class="dropdown-item" href="#">Another action</a>
			          <div class="dropdown-divider"></div>
			          <a class="dropdown-item" href="#">Something else here</a>
			        </div>
			      </li>
			    </ul>
			  </div>
			</nav>
		)
	}
}

export default navigation;



