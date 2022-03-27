import React, { Component } from 'react';
import logo from '../media/testphoto.png';
import {
    useParams
} from "react-router-dom";

function Viewp (props) {
  const params = useParams();

	return (
        <div className="container-prod">
            <div className="left-column">
               <img data-image="black" class="active" src={logo} />
            </div>

            <div className="right-column">
                <div className="product-description">
                  <span>Headphones</span>
                  <h1>{params.id_product}</h1>
                  <p>The preferred choice of a vast range of acclaimed DJs. Punchy, bass-focused sound and high isolation. Sturdy headband and on-ear cushions suitable for live performance</p>
                </div>

                <div className="product-configuration">
                    <div className="product-color">
                        <span>Color</span>
                        <div className="color-choose">
                          <div>
                            <input type="radio" checked />
                            <label for="red"><span></span></label>
                          </div>
                          <div>
                            <input type="radio" name="color" value="blue" />
                            <label for="blue"><span></span></label>
                          </div>
                          <div>
                            <input type="radio" value="black" />
                            <label for="black"><span></span></label>
                          </div>
                        </div>
                    </div>

                    <div className="cable-config">
                        <span>Cable configuration</span>
                        <div className="cable-choose">
                          <button>Straight</button>
                          <button>Coiled</button>
                          <button>Long-coiled</button>
                        </div>
                    </div>
                </div>

                <div className="product-price">
                  <span>148$</span>
                  <a href="#" className="cart-btn">Add to cart</a>
                </div>
            </div>

        </div>
	)
}


export default Viewp;