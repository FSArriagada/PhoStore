import React from 'react';
import Item from './Item';

function ItemList({products}) {
    
    return (
        <>
        { products.map (productos => {
            return(
                <Item products={productos} key={productos.id}/>
            )
        })
        }
        </>
    )
}

export default ItemList