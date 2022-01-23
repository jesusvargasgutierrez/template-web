import React, { Component } from 'react';

class slider extends Component{
	render(){
		return (
			<div id="carouselExampleIndicators" className="container carousel slide" data-ride="carousel">
			  <ol className="carousel-indicators">
			    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
			    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
			    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
			  </ol>
			  <div className="carousel-inner">
			    <div className="carousel-item active">
			      <img className="d-block w-100" src='./images/slide1.svg' />
			      <div className="carousel-caption d-none d-md-block">
					    <h5>First</h5>
					    <p>First second</p>
				   </div>
			    </div>
			    <div className="carousel-item">
			      <img className="d-block w-100" src='./images/slide2.svg' />
			    </div>
			    <div className="carousel-item">
			      <img className="d-block w-100" src="./images/slide3.svg" />
			    </div>
			  </div>
			  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
			    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
			    <span className="sr-only">Previous</span>
			  </a>
			  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
			    <span className="carousel-control-next-icon" aria-hidden="true"></span>
			    <span className="sr-only">Next</span>
			  </a>
			</div>
		)
	}
}

export default slider;



