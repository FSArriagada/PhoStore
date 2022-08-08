import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useCartContext from '../context/CartContext';
import UserForm from "./UserForm";


function CartView() {
    const { cart,clearCart,removeFromCart, totalCart } = useCartContext();
    const [finalCompra,setFinalCompra] = useState(false);

    const finishHandler = () =>{
        setFinalCompra(true)
    }

    if (cart.length === 0){
        return (<div className="fuente-blanca min-vh-100">
                        <div className="text-center">
                            <h4 className="fuente-blanca">No hay items en el carrito</h4>
                            <Link to="/home"><button className="btn btn-success mx-2">Volver al catálogo</button></Link>
                        </div>
                     
                </div> 
                )
    } else {
        return <div className="table-responsive min-vh-100">
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
                        </tbody>
                            </table>
                            <h3 className="fuente-blanca">Total: ${totalCart()}</h3>
                                <div className="d-flex justify-content-end mb-2">
                                    <button onClick={clearCart} className="btn bg-danger bg-gradient btn-sm mx-1 fuente-blanca">Vaciar Carrito</button>
                                    <button onClick={finishHandler} className="btn bg-success bg-gradient btn-sm mx-1 fuente-blanca">Confirmar Compra</button>
                                    <button className="btn bg-success bg-gradient btn-sm mx-1"><Link to="/home" className="text-decoration-none fuente-blanca">Continuar Comprando</Link></button> 
                                </div>
                            
                            {finalCompra ? <UserForm/> : <></>}
                        </div>
                        
                }
            }


   
               
              
            



export default CartView