import React, { Component } from 'react';
import {
    useParams
} from "react-router-dom";

function Home (props) {
  const params = useParams();

	return (
      <div className="snippet-body all-shop">
          <div className="wrapper">
            <div className="d-md-flex align-items-md-center">
                <div className="h3-dash">Fruits and vegetables</div>
                <div className="ml-auto d-flex align-items-center views"> 
                  <span className="btn-dash text-success"> 
                    <span className="fas fa-th px-md-2 px-1"></span>
                    <span>Grid view</span> 
                  </span> 
                  <span className="btn-dash">
                    <span className="fas fa-list-ul"></span>
                    <span className="px-md-2 px-1">List view</span>
                  </span> 
                  <span className="green-label px-md-2 px-1">428</span>
                  <span className="text-muted">Products</span> 
                </div>
            </div>
            <div className="d-lg-flex align-items-lg-center pt-2">
              <div className="form-inline d-flex align-items-center my-2 mr-lg-2 radio bg-light border"> 
                <label className="options">Most Popular 
                  <input type="radio" name="radio" /> 
                  <span className="checkmark"></span> 
                </label> 
                <label className="options">
                  Cheapest 
                  <input type="radio" name="radio" checked />
                  <span className="checkmark"></span> 
                </label> 
              </div>
              <div className="form-inline d-flex align-items-center my-2 checkbox bg-light border mx-lg-2"> 
                <label className="tick">
                  Farm 
                  <input type="checkbox" checked="checked" /> 
                  <span className="check"></span> 
                </label> 
                <span className="text-success px-2 count">328</span> 
              </div>
              <div className="form-inline d-flex align-items-center my-2 checkbox bg-light border mx-lg-2"> 
                <label className="tick">
                  Bio 
                  <input type="checkbox" /> 
                  <span className="check"></span> 
                </label> 
                <span className="text-success px-2 count">72</span> 
              </div>
              <div className="form-inline d-flex align-items-center my-2 checkbox bg-light border mx-lg-2">
                   <label className="tick">
                    Czech republic 
                    <input type="checkbox" /> 
                    <span className="check"></span> 
                   </label> 
                   <span className="border px-1 mx-2 mr-3 font-weight-bold count">12</span> 
                   <select name="country" id="country" className="bg-light">
                      <option value="" hidden>Country</option>
                      <option value="India">India</option>
                      <option value="USA">USA</option>
                      <option value="Uk">UK</option>
                   </select>
              </div>
            </div>
          </div>
      </div>
	)
}

export default Home;