import React from 'react'
import ItemCount from './ItemCount'


function ItemDetail ({product}) {
    return (
        <div className="card mb-3 shadow "> 
        <div className="card-body">
            <h5 className="card-title">{product.descripcion}</h5>
            <p className="card-text">${product.precio}</p>
        </div>
        <div className="card-footer">
            <ItemCount stock={10} initial={1}/>
        </div>
    </div>
    )
}

export default ItemDetail