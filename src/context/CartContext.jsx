import { useState, createContext, useContext } from "react";


const CartContext = createContext();
const useCartContext = () => useContext(CartContext);
const {Provider} = CartContext;

export function CartContextProvider({children}) {
    const [cart, setCart] = useState([]);

    const addToCart = (item, cant) =>{
        if(isInCart(item.id)){
            const newCart = cart.map (cartItem => {
                if(cartItem.id === item.id){
                    const copyItem = {...cartItem}
                    copyItem.cant += cant;
                    return copyItem
                } else { 
                    return cartItem
                }

            })
            setCart(newCart);
        }else {
            const newItem = {...item,cant}
            setCart([...cart,newItem]);
        }
    }

    const removeFromCart = (id) => {
        const newCart = [...cart];
        const cartFilter = newCart.filter (item => {
            return item.id !== id;
        })
        setCart(cartFilter)
    }

    const isInCart = (id) =>{
        const newCart = cart.some(item =>item.id === id)
        return newCart;
    }

    const clearCart =() =>{
        return setCart([])
    }
    
    const calcPriceCart = () =>{
        let total = 0;
        cart.forEach(itemCart => {
            total+=itemCart.cant  
        });
        return total;
    }

    const totalCart = () => {
        let totalFinal = cart.reduce(
            (acc, item) => acc + item.cant * item.precio, 0
        )
        return totalFinal;
    }


    
    const contextFunction = () => console.log("Context ready");
    return(
        <Provider value={ {contextFunction, cart, addToCart, removeFromCart, isInCart, clearCart,calcPriceCart,totalCart} }>
            {children}
        </Provider>
    )

}

export default useCartContext