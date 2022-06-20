import './CartWidget.css';
import Carrito from '../assets/Carrito.svg';
function CartWidget() {
  return (
    <div>
        <img src={Carrito} className='cart' alt="Carrito"/>
        
    </div>
  );
}

export default CartWidget;