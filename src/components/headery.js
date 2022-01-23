import React, { Component, useReducer } from 'react';

function Headery(props){
	return (
        <div>
            <ul>
                {props.items.map((o) => (
                    <li key={o.id}>{o.title}</li>
                ))}
            </ul>
        </div>
	)
}

export default Headery;



