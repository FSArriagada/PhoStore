import React from 'react';
import ItemCount from './ItemCount';
import './Item.css';
import {useState} from "react";
import {Link} from "react-router-dom";




function ItemDetail ({product}) {
    const [isInCart, setIsInCart] = useState(false)
    
    function onAdd(num){
        console.log(`Agregaste ${num} productos`)
        setIsInCart(true);
    }
    

    return (
        <div className="mb-5 tarjeta">
            <img src={product.img} className="card-img-top producto-imagen" alt="..."/> 
        <div className="card-body tarjeta-body">
            <h5 className="card-title fuente-blanca">{product.descripcion}</h5>
            <p className="card-text fuente-blanca">${product.precio}</p>
        </div>
        <div className="card-footer tarjeta-footer fuente-blanca">
            {isInCart ? <Link to="/cart"><button className="btn btn-success mx-2">Ver Carrito</button></Link> :<ItemCount onAdd={onAdd} stock={10} initial={1}/>
            } 
        </div>
    </div>
    )
}

export default ItemDetail