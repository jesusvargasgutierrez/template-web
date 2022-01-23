import React, { Component } from 'react';

class header extends Component{
	render(){
		return (
			<div className="container">
				<div className="row">
				   <div className="col-md-3 col-xs-12 text-center">
				   		social network
				   </div>
				   <div className="col-md-6 col-xs-12">
				   		<h1>image</h1>
				   </div>	
				   <div className="col-md-3 hidden-xs">
				   		clima
				   </div>
				</div>
			</div>
		)
	}
}

export default header;



