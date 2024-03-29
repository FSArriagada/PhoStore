import './CartWidget.css';
import Carrito from '../assets/Carrito.svg';
import useCartContext from '../context/CartContext';
import {Link} from 'react-router-dom'

function CartWidget() /* Carrito de la navbar */ {
  const { calcPriceCart } = useCartContext();
  return (
    <div>
        <Link to="/cart"><img src={Carrito} className='cart' alt="Carrito"/></Link>
        <div className="text-white cantCarrito rounded-pill badge">{calcPriceCart()}</div>
    </div>
  );
}

export default CartWidget;