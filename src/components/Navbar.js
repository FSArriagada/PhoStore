import './Navbar.css';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <header>
        <nav className='Navbar'>
            <div className='left-nav'>
                <div className='brand-title'>
                    <p><Link to="/home" className='text-decoration-none'>PhoStore</Link></p> 
                </div>
                <div className='navbar-links'>
                    <ul>
                        <li><Link to="/category/Samsung">Samsung</Link></li>
                        <li><Link to="/category/Apple">Apple</Link></li>
                        <li><Link to="/category/Xiaomi">Xiaomi</Link></li>
                    </ul>
                </div>
            </div>
            <CartWidget/>
        </nav>
    </header>



  );
}

export default Navbar;