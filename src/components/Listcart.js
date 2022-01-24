import React, { Component, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { quantityprod } from "../reducers/actionsapp";
import '../css/listcart.css';

const Listcart = (props) => {
    const [total, settotal] = useState(0);

    const itemcart = props.items;
    
    const [mycart, setcart] = useState(itemcart);

    function handleChange(value, price){
        settotal(total + (value * price));

        console.log(price);
    }

    /*useEffect(() => {
        buycart(itemcart);
    });*/

    function removeitem(iditem){
        //console.log(iditem);

        //console.log(mycart);

        //var res = mycart.find((item) => item.id === iditem);
        var res = mycart.filter((item) => item.id !== iditem);

        console.log(res);

        setcart([...mycart, res]);

        //console.log(mycart);
    }

	return (
        <div className="container bodylist">
            <div className="row">
                <div className="col-md-8 cart">
                    <div className="titlelist">
                        <div className="row">
                            <div className="col">
                                <h4><b>Tu compra por</b></h4>
                            </div>
                            <div className="col align-self-center text-right text-muted">3 Articulos</div>
                        </div>
                    </div>
                    <div className="row">
                        {mycart.map((item,index) => (
                            <div key={`${item.title}-${index}`} className="row main align-items-center mt-3">
                                <div className="col-2">
                                    <img className="img-fluid" src={item.photo} />
                                </div>
                                <div className="col">
                                    <div className="row text-muted">{item.title}</div>
                                    <div className="row stlavailable">
                                        Disponible
                                    </div>
                                </div>
                                <div className="col">
                                    Cantidad&nbsp;
                                    <select onChange={(e) => handleChange(e.target.value, item.saleprice)}>
                                        {quantityprod.qnt.map((qt) => (
                                            <option key={qt}>
                                                {qt}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col">
                                    <strong>
                                        ${item.saleprice}
                                    </strong>&nbsp;
                                    <button onClick={(e) => removeitem(item.id)}>
                                        <i className="text-danger fas fa-trash-alt"></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="back-to-shop">
                        <a href="#">&leftarrow;</a>
                        <span className="text-muted">Back to shop</span>
                    </div>
                </div>
                <div className="col-md-4 summary">
                    <div>
                        <h5><b>Resumen</b></h5>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col">3 Articulos</div>
                        <div className="col text-right">${total}</div>
                    </div>
                    <div>
                        <select className="selectopc mt-3">
                            <option className="text-muted">Entrega normal - $5.00</option>
                        </select>
                        <p>Codigo de promoci&oacute;n</p> 
                        <input className="inputlist" id="code" placeholder="Ingresa tu codigo" />
                    </div>
                    <div className="row">
                        <div className="col">
                            Precio total
                        </div>
                        <div className="col text-right">${total}</div>
                    </div> 
                    <button className="btnlist">Pagar</button>
                </div>
            </div>
        </div>
	)
}

export default Listcart;



