import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const cartCount = useSelector(state => state.plants.cartCount);

  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/products" style={linkStyle}>Products</Link>
        <Link to="/cart" style={linkStyle}>
          🛒 Cart <span style={badgeStyle}>{cartCount}</span>
        </Link>
      </nav>
    </header>
  );
}

const headerStyle = { background: '#2c3e50', padding: '1rem' };
const navStyle = { display: 'flex', gap: '2rem', alignItems: 'center' };
const linkStyle = { color: 'white', textDecoration: 'none', fontSize: '1.2rem' };
const badgeStyle = { background: '#e74c3c', color: 'white', borderRadius: '50%', padding: '0.2rem 0.6rem', marginLeft: '0.3rem' };

export default Header;
