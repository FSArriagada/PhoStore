import './Navbar.css';
import CartWidget from './CartWidget';

function Navbar() {
  return (
    <header>
        <nav class="Navbar">
            <div class="left-nav">
                <div class="brand-title">
                    <p>PhoStore</p>    
                </div>
                <div class="navbar-links">
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Celulares</a></li>
                        <li><a href="#">Accesorios</a></li>
                    </ul>
                </div>
            </div>
            <CartWidget/>
        </nav>
    </header>



  );
}

export default Navbar;