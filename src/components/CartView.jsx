import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useCartContext from '../context/CartContext';
import { createBuyOrder} from '../services/firestore';

function CartView() {
    const { cart,clearCart,removeFromCart, totalCart } = useCartContext();
  
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
    

    
    

}

    if (cart.length === 0){
        return (<div className="fuente-blanca">
                        <div className="text-center">
                            <h4 className="fuente-blanca">No hay items en el carrito</h4>
                            <Link to="/home"><button className="btn btn-success mx-2">Volver al catálogo</button></Link>
                        </div>
                     
                </div> 
                )
    } else {
        return <div className="table-responsive">
                    <table className="table bg-secondary fuente-blanca">
                    <thead>
                        <tr>
                        <th scope="col" className="border-0 bg-secondary">
                            <div className="p-2 px-3 text-uppercase">Producto</div>
                        </th>
                        <th scope="col" className="border-0 bg-secondary">
                            <div className="py-2 text-uppercase">Precio</div>
                        </th>
                        <th scope="col" className="border-0 bg-secondary">
                            <div className="py-2 text-uppercase">Cantidad</div>
                        </th>
                        <th scope="col" className="border-0 bg-secondary">
                            <div className="py-2 text-uppercase">Eliminar</div>
                        </th>
                        </tr>
                    </thead>
                    <tbody> 
                    {cart.map(itemCart => {
                    return <tr key={itemCart.id}>
                        <th scope="row" className="border-0">
                            <div className="p-2">
                            <img src={itemCart.img} style={{width: "128px"}} className="img-fluid rounded shadow-sm"/>
                            <div className="ml-3 d-inline-block align-middle">
                                <h5 className="mb-0"> <p className="d-inline-block align-middle">{itemCart.descripcion}</p></h5><span className="text-muted font-weight-normal font-italic d-block">Categoria: {itemCart.categoria}</span>
                            </div>
                            </div>
                        </th>
                        <td className="border-0 align-middle"><strong>${itemCart.precio * itemCart.cant}</strong></td>
                        <td className="border-0 align-middle"><strong>{itemCart.cant}</strong></td>
                        <td className="border-0 align-middle"><button onClick={() => removeFromCart(itemCart.id)} className="btn btn-danger btn-sm"><i className="fa-solid fa-trash-can"></i></button></td>
                        </tr>
                    })}
                            <h3>Total: ${totalCart()}</h3>
                            <button onClick={clearCart} className="btn btn-danger btn-sm">Vaciar Carrito</button>
                            <button onClick={() => {Buy();clearCart()}} className="btn btn-success btn-sm">Confirmar Compra</button>
                            </tbody>
                            </table>
                        </div>
                        
                }
            }


   
               
              
            



export default CartView