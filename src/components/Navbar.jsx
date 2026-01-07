import { useState } from 'react'; // Importamos el Hook para el estado
import './Navbar.css';

const Navbar = ({ toggleTheme, theme }) => {
  const [isOpen, setIsOpen] = useState(false); // Estado para el menú

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">MiPortafolio</a>
      </div>

      {/* Icono de hamburguesa - Solo visible en móvil */}
      <div className={`nav-toggle ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      

      {/* Añadimos una clase condicional dependiendo de si isOpen es true o false */}
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#hero" onClick={() => setIsOpen(false)}>Inicio</a></li>
        <li><a href="#proyectos" onClick={() => setIsOpen(false)}>Proyectos</a></li>
        <li><a href="#sobre-mi" onClick={() => setIsOpen(false)}>Sobre mí</a></li>
        <li><a href="#contacto" className="nav-btn" onClick={() => setIsOpen(false)}>Contacto</a></li>
        {/* Botón de cambio de tema */}
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === 'light' ? <i className="fas fa-moon"></i> : <i className="fas fa-sun"></i>}
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;