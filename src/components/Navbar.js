import './Navbar.css';

function Navbar() {
  return (
    <header>
        <nav class="Navbar">
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
        </nav>
    </header>



  );
}

export default Navbar;