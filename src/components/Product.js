import React, { Component, useRef, useState } from 'react';
import {
    useParams
} from "react-router-dom";


function Product (props) {
    const params = useParams();

	return (
        <div>
            <h1>producto {params.id_product} </h1>
        </div>
	)
}


export default Product;