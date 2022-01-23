import React, { Component } from 'react';
import Carrosell from './carrosell';
import Slider from './slider';

class slider extends Component{
	render(){
		return (
			<div className="container mt-3">
				<div className="row">
					<div className="col-12 col-lg-9">
						<Carrosell />
					</div>
					<div className="col-12 col-lg-3">
						<Slider />
					</div>
				</div>
			</div>
		)
	}
}

export default slider;



