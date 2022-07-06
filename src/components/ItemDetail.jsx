import React from 'react'
import ItemCount from './ItemCount'
import './Item.css';


function ItemDetail ({product}) {
    return (
        <div className="mb-5 tarjeta">

        <div className="card-body tarjeta-body">
            <h5 className="card-title fuente-blanca">{product.descripcion}</h5>
            <p className="card-text fuente-blanca">${product.precio}</p>
        </div>
        <div className="card-footer tarjeta-footer fuente-blanca">
            <ItemCount stock={10} initial={1}/>
        </div>
    </div>
    )
}

export default ItemDetail