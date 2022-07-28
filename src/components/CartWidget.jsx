import './CartWidget.css';
import Carrito from '../assets/Carrito.svg';
import useCartContext from '../context/CartContext';
import {Link} from 'react-router-dom'

function CartWidget() {
  const { calcPriceCart } = useCartContext();
  return (
    <div>
        <Link to="/cart"><img src={Carrito} className='cart' alt="Carrito"/></Link>
        <div className="text-white cantCarrito">{calcPriceCart()}</div>
    </div>
  );
}

export default CartWidget;