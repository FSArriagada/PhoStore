import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useCartContext from '../context/CartContext';
import { createBuyOrder} from '../services/firestore';

function CartView() {
    const { cart,clearCart,removeFromCart, totalCart } = useCartContext();
    const [orderDone, setOrderDone] = useState(false)
   // const [orderId, setOrderId] = useState(false)
    function Buy(){   
        const cantItems = cart.map((item) => ({
            title: item.descripcion,
            cant: item.cant,
            price: item.precio,
            id: item.id,
            } 
        ))
        
        const buyOrder = {
        buyer: {
            name: "Facundo Arriagada",
            phone: "1122670052",
            email: "Facu@coder.com",
        },
        items: cantItems,
        date: new Date(),
        total: totalCart()
    }
    createBuyOrder(buyOrder)
    setOrderDone(true)

    
    

}

    if (cart.length === 0){
        return (<div className="fuente-blanca">
                    {orderDone ? <h3>¡Compra confirmada! ID de su compra:</h3> :
                        <div className="text-center">
                            <h4 className="fuente-blanca">No hay items en el carrito</h4>
                            <Link to="/home"><button className="btn btn-success mx-2">Volver al catálogo</button></Link>
                        </div>
                    } 
                </div> 
                )
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
                    <button onClick={() => {Buy();clearCart()}} className="btn btn-success btn-sm">Confirmar Compra</button>
                </div>
        }
    }


export default CartView