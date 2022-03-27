import Viewp from './Viewp';
import React, { Component, useRef, useState } from 'react';
import {
    useParams
} from "react-router-dom";


function Product (props) {
    const params = useParams();

	return (
        <div>
            <Viewp productid={params.id_product} />
        </div>
	)
}


export default Product;