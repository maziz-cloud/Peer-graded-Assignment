import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div style={containerStyle}>
      <h1>🌿 Urban Jungle Plant Shop</h1>
      <p style={paragraphStyle}>
        We bring the beauty of nature to your home with our curated collection of houseplants.
        From easy-care succulents to lush ferns, find the perfect green companion for your space.
      </p>
      <Link to="/products">
        <button style={buttonStyle}>Get Started</button>
      </Link>
    </div>
  );
}

const containerStyle = {
  backgroundImage: 'url("/images/background.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
};

const paragraphStyle = { maxWidth: '600px', textAlign: 'center', fontSize: '1.2rem' };
const buttonStyle = { padding: '1rem 2rem', fontSize: '1.2rem', background: '#27ae60', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' };

export default LandingPage;
