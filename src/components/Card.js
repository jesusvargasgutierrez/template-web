import React, { Component, useState } from 'react';
import {
    Link
} from "react-router-dom";

function Card (props) {
    function stylevis(flag){
        return {
            display: flag ? 'inline' : 'none'
        }
    }
    
    function add(p) {
        props.create(p);

        props.increment();

        //console.log(props);

        //console.log(p);
        /*const newt = {
            id:1,
            value:'hello'
        }
        setcart([...cart, newt]);
        console.log(cart);*/

        //console.log(p);
        //console.log(p);
        //props.count();

        //props.addcart(p);
        //console.log(props);
        //props.increment();
        
        //console.log(p);
    }

    return (
        <div className="col mb-5">
            <div className="card h-100">            
                <div className="badge bg-dark text-white position-absolute">{props.data.sale ? 'sale' : ''}</div>
                <img className="card-img-top" src={props.data.photo} alt="..." />
                <div className="card-body p-4">
                    <div className="text-center">
                        <h5 className="fw-bolder">
                            <Link to={`/product/${props.data.id}`}>{props.data.title}</Link>
                        </h5>
                        <input type="hidden" value="2" />
                        <div className="d-flex justify-content-center small text-warning mb-2">
                            <div className="bi-star-fill"></div>
                        </div>
                        <span className="text-muted text-decoration-line-through" style={stylevis(props.data.priceminlower)}>
                            $ {props.data.pricemin}
                        </span>
                        $ {props.data.pricemax}
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                        <button className="btn btn-outline-dark mt-auto" onClick={() => add(props.data) } >Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
	)
}

const hidden = {
    display: ''
}

export default Card;