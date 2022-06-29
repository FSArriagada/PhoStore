import './Navbar.css';
import CartWidget from './CartWidget';

function Navbar() {
  return (
    <header>
        <nav className='Navbar'>
            <div className='left-nav'>
                <div className='brand-title'>
                    <p>PhoStore</p>    
                </div>
                <div className='navbar-links'>
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