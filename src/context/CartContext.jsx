import { useState, createContext, useContext } from "react";


const CartContext = createContext();
const useCartContext = () => useContext(CartContext);
const {Provider} = CartContext;

export function CartContextProvider({children}) {
    const [cart, setCart] = useState([]);

    const addToCart = (item, cant) =>{ /*Función para agregar al carrito */
        if(isInCart(item.id)){
            const newCart = cart.map (cartItem => { /*mapeamos y verificamos si el item ya esta en el carrito */
                if(cartItem.id === item.id){
                    const copyItem = {...cartItem}
                    copyItem.cant += cant; /*Si ya esta en el carrito lo sumamos */
                    return copyItem
                } else { 
                    return cartItem
                }

            })
            setCart(newCart);
        }else { /*En el caso de que no esté solo lo agregamos */
            const newItem = {...item,cant}
            setCart([...cart,newItem]);
        }
    }

    const removeFromCart = (id) => { /*Función para remover un item del carrito por medio de filter y devuelvo lo que no coincide */
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
    
    const calcPriceCart = () =>{ /*Función para sumar los items que estan presentes en carrito */
        let total = 0;
        cart.forEach(itemCart => {
            total+=itemCart.cant  
        });
        return total;
    }

    const totalCart = () => { /*Función para calcular el total de la compra */
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