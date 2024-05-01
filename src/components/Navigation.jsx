import { Link, useLocation } from "react-router-dom";
import { useState } from 'react';


function Navbar() {
  const currentPage = useLocation().pathname;
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className= "sticky-top text-black font-semibold z-20 flex justify-between items-center mx-auto p-7 text-lg shadow-md w-screen" style={{ backgroundColor: '#084b83', margin: '0', padding: '0' }}>
      <div className="container-fluid" >
        <button className="navbar-toggler" type="button" onClick={toggleMenu} style={{ padding: '0.5rem 0.75rem'}}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} style={{ zIndex: '1000' }}>
          <ul className="navbar-nav ml-auto">
            <li className={`nav-item ${currentPage === '/' ? 'active' : ''}`}>
              <Link to="/" className="nav-link" onClick={closeMenu} 
                style={{ color: 'white', transition: 'color 0.3s', textDecoration: 'none', fontSize: '18px' }}
                onMouseEnter={(e) => e.target.style.color = '#42bfdd'}
                onMouseLeave={(e) => e.target.style.color = 'white'}>
                Home
              </Link>
            </li>

            <li className={`nav-item ${currentPage === '/About' ? 'active' : ''}`}>
              <Link to="/About" className="nav-link" onClick={closeMenu} 
                style={{ color: 'white', transition: 'color 0.3s', textDecoration: 'none', fontSize: '18px' }}
                onMouseEnter={(e) => e.target.style.color = '#42bfdd'}
                onMouseLeave={(e) => e.target.style.color = 'white'}>
                About
              </Link>
            </li>

            <li className={`nav-item ${currentPage === '/Projects' ? 'active' : ''}`}>
              <Link to="/Projects" className="nav-link" onClick={closeMenu} 
                style={{ color: 'white', transition: 'color 0.3s', textDecoration: 'none', fontSize: '18px' }}
                onMouseEnter={(e) => e.target.style.color = '#42bfdd'}
                onMouseLeave={(e) => e.target.style.color = 'white'}>
                Portfolio
              </Link>
            </li>

            <li className={`nav-item ${currentPage === '/Contact' ? 'active' : ''}`}>
              <Link to="/Contact" className="nav-link" onClick={closeMenu} 
                style={{ color: 'white', transition: 'color 0.3s', textDecoration: 'none', fontSize: '18px' }}
                onMouseEnter={(e) => e.target.style.color = '#42bfdd'}
                onMouseLeave={(e) => e.target.style.color = 'white'}>
                Contact
              </Link>
              </li>

            <li className={`nav-item ${currentPage === '/Resume' ? 'active' : ''}`}>
              <Link to="/Resume" className="nav-link" onClick={closeMenu} 
                style={{ color: 'white', transition: 'color 0.3s', textDecoration: 'none', fontSize: '18px' }}
                onMouseEnter={(e) => e.target.style.color = '#42bfdd'}
                onMouseLeave={(e) => e.target.style.color = 'white'}>
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


