import Navbar from './Navigation';

function Header() {
  return (
    <header className="sticky-top navbar navbar-expand-lg navbar-light" 
      style={{ backgroundColor: '#084b83', color: '#230c33', fontWeight: 'bold', width: '100%', overflowX: 'hidden', height: '70px' }}>
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="/" style={{ fontSize: '24px' }}>Muniba Pervez</a>
      </div>
        <Navbar />    
    </header>
  );
}

export default Header;
