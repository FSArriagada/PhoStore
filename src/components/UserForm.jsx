import React from 'react';
import { createBuyOrder} from '../services/firestore';
import useCartContext from '../context/CartContext';
import { useState } from 'react';


function UserForm() {

    const [newName, setNewName] = useState("")
    const [newEmail, setNewEmail] = useState("")
    const [newPhone, setNewPhone] = useState("")

    const nameHandler = (event) => {
        setNewName(event.target.value)
    }
    const emailHandler = (event) => {
        setNewEmail(event.target.value)
    }
    const phoneHandler = (event) => {
        setNewPhone(event.target.value)
    }
    
    const { cart, totalCart, clearCart } = useCartContext();
    
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
                name: newName,
                phone: newPhone,
                email: newEmail,
            },
            items: cantItems,
            date: new Date(),
            total: totalCart()
            }
        
        createBuyOrder(buyOrder)
        clearCart()

    }




return( <form className="bg-dark container w-25" >
    <h4 className='fuente-blanca'>Por favor, ingrese sus datos para proceder con el pedido.</h4>
    <div className="mb-3">
        <label className="form-label fuente-blanca">Nombre y Apellido</label>
        <input type="text" className="form-control" value={newName} onChange={nameHandler} />
    </div>
    <div className="mb-3">
    <label className="form-label fuente-blanca">Email</label>
        <input className="form-control" value={newEmail} onChange={emailHandler}/>
    </div>
    <div className="mb-3">
    <label className="form-label fuente-blanca">Telefono</label>
        <input type="text" className="form-control" value={newPhone} onChange={phoneHandler}/>
    </div>
    <button type="button" className="btn btn-success" onClick={Buy}>Finalizar pedido</button>
    </form>
    )

}
export default UserForm;