import React from 'react'
import './Item.css';
import {Link} from 'react-router-dom';


function Item({products}) /* muestra de producto */ {
    return (
        <div className="mb-5 tarjeta">
            <img src={products.img} className="card-img-top producto-imagen" alt="..."/> 
        <div className="card-body tarjeta-body">
            <h5 className="card-title fuente-blanca">{products.descripcion}</h5>
            <p className="card-text fuente-blanca">${products.precio}</p>
            <Link to={`/product/${products.id}`} className="card-text fuente-blanca text-decoration-none">Ver más</Link>
        </div>
    </div>
    )
}

export default Item