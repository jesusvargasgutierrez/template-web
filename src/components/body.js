import React, { Component, useRef, useState } from 'react';
import Card from "./Card";
import Cover from '../components/cover';

function Body (props) {
	function handleaddcart(id){
		alert('hello world ' + id);
	}

    const article = props.products.products;

	return (
        <div>
            <Cover />
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {article.map((product) => (
                            <Card key={product.id} data={product} increment={props.count} list={props.items} create={props.create} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
	)
}


export default Body;