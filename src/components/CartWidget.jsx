import './CartWidget.css';
import Carrito from '../assets/Carrito.svg';
import useCartContext from '../context/CartContext';

function CartWidget() {
  const { calcPriceCart } = useCartContext();
  return (
    <div>
        <img src={Carrito} className='cart' alt="Carrito"/>
        <div class="text-white cantCarrito">{calcPriceCart()}</div>
    </div>
  );
}

export default CartWidget;