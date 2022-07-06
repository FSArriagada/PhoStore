import React from 'react'
import ItemCount from './ItemCount';
import './Item.css';
import {Link} from 'react-router-dom';


function Item({products}) {
    return (
        <div className="mb-5 tarjeta">
        <img src={require(`../assets/img/${products.img}`)} className="card-img-top producto-imagen" alt="..."/> 
        <div className="card-body tarjeta-body">
            <h5 className="card-title fuente-blanca">{products.descripcion}</h5>
            <p className="card-text fuente-blanca">${products.precio}</p>
            <Link to={`/product/${products.id}`} className="card-text fuente-blanca">Ver más</Link>
        </div>
        <div className="card-footer tarjeta-footer fuente-blanca">
            <ItemCount stock={10} initial={1}/>
        </div>
    </div>
    )
}

export default Item