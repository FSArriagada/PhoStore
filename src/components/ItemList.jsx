import React from 'react';
import Item from './Item';
import ItemCount from './ItemCount';

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