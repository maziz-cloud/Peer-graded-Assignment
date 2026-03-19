import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/plants/plantSlice';

function ProductListing() {
  const plants = useSelector(state => state.plants.plants);
  const dispatch = useDispatch();

  // Group plants by category
  const categories = [...new Set(plants.map(p => p.category))];

  const handleAddToCart = (id) => {
    dispatch(addToCart(id));
  };

  return (
    <div style={pageStyle}>
      <h1>Our Plants</h1>
      {categories.map(category => (
        <div key={category} style={categoryStyle}>
          <h2>{category}</h2>
          <div style={plantGridStyle}>
            {plants.filter(p => p.category === category).map(plant => (
              <div key={plant.id} style={plantCardStyle}>
                <img src={plant.image} alt={plant.name} style={imageStyle} />
                <h3>{plant.name}</h3>
                <p>${plant.price}</p>
                <button
                  onClick={() => handleAddToCart(plant.id)}
                  disabled={plant.inCart}
                  style={buttonStyle(plant.inCart)}
                >
                  {plant.inCart ? 'Added' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

const pageStyle = { padding: '2rem' };
const categoryStyle = { marginBottom: '2rem' };
const plantGridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' };
const plantCardStyle = { border: '1px solid #ccc', borderRadius: '8px', padding: '1rem', textAlign: 'center' };
const imageStyle = { width: '150px', height: '150px', objectFit: 'cover', borderRadius: '5px' };
const buttonStyle = (disabled) => ({
  background: disabled ? '#95a5a6' : '#27ae60',
  color: 'white',
  border: 'none',
  padding: '0.5rem 1rem',
  borderRadius: '5px',
  cursor: disabled ? 'not-allowed' : 'pointer'
});

export default ProductListing;
