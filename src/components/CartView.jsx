import React from "react";
import { Link } from "react-router-dom";
import useCartContext from '../context/CartContext';

function CartView() {
    const { cart,clearCart,removeFromCart, totalCart } = useCartContext();
    console.log("CART",cart)
    if (cart.length === 0){
        return <div className="text-center">
                    <h4 className="fuente-blanca">No hay items en el carrito</h4>
                    <Link to="/home"><button className="btn btn-success mx-2">Volver al catálogo</button></Link>
                </div>
    } else {
        return <div>
            {cart.map(itemCart => {
            return <div key={itemCart.id}>
                        <img src={itemCart.img} style={{width: "128px"}}/>
                        <h3>{itemCart.descripcion}</h3>
                        <h3>{itemCart.cant}</h3>
                        <h3>${itemCart.precio * itemCart.cant}</h3>
                        <button onClick={() => removeFromCart(itemCart.id)} className="btn btn-danger btn-sm"><i className="fa-solid fa-trash-can"></i></button>
                    </div>
            })}
            <h3>Total: ${totalCart()}</h3>
            <button onClick={clearCart} className="btn btn-danger btn-sm">Vaciar Carrito</button>
        </div>
    }
}

export default CartView