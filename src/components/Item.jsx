import React from 'react'
import products from '../data/products'
import ItemCount from './ItemCount'


function Item({products}) {
    return (
        <div className="card mb-3">
        <img src={products.img} className="card-img-top" alt="..."/> 
        <div className="card-body">
            <h5 className="card-title">{products.descripcion}</h5>
            <p className="card-text">${products.precio}</p>
        </div>
        <div className="card-footer">
            <ItemCount stock={10} initial={1}/>
        </div>
    </div>
    )
}

export default Item