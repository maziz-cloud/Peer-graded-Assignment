import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../features/plants/plantSlice';

function ShoppingCart() {
  const cart = useSelector(state => state.plants.cart);
  const cartCount = useSelector(state => state.plants.cartCount);
  const cartTotal = useSelector(state => state.plants.cartTotal);
  const dispatch = useDispatch();

  const handleCheckout = () => {
    alert('Coming Soon');
  };

  if (cart.length === 0) {
    return (
      <div style={emptyCartStyle}>
        <h2>Your cart is empty</h2>
        <Link to="/products">
          <button style={continueButtonStyle}>Continue Shopping</button>
        </Link>
      </div>
    );
  }

  return (
    <div style={pageStyle}>
      <h1>Shopping Cart</h1>
      <div style={summaryStyle}>
        <p>Total Plants: {cartCount}</p>
        <p>Total Cost: ${cartTotal.toFixed(2)}</p>
      </div>

      <div style={cartListStyle}>
        {cart.map(item => (
          <div key={item.id} style={cartItemStyle}>
            <img src={item.image} alt={item.name} style={cartImageStyle} />
            <div style={itemDetailsStyle}>
              <h3>{item.name}</h3>
              <p>Unit Price: ${item.price}</p>
              <div style={quantityControlStyle}>
                <button onClick={() => dispatch(decrementQuantity(item.id))} style={qtyButtonStyle}>−</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(incrementQuantity(item.id))} style={qtyButtonStyle}>+</button>
              </div>
            </div>
            <button onClick={() => dispatch(removeFromCart(item.id))} style={deleteButtonStyle}>Delete</button>
          </div>
        ))}
      </div>

      <div style={actionButtonsStyle}>
        <Link to="/products">
          <button style={continueButtonStyle}>Continue Shopping</button>
        </Link>
        <button onClick={handleCheckout} style={checkoutButtonStyle}>Checkout</button>
      </div>
    </div>
  );
}

const pageStyle = { padding: '2rem' };
const emptyCartStyle = { textAlign: 'center', marginTop: '2rem' };
const summaryStyle = { background: '#ecf0f1', padding: '1rem', borderRadius: '5px', marginBottom: '2rem' };
const cartListStyle = { display: 'flex', flexDirection: 'column', gap: '1rem' };
const cartItemStyle = { display: 'flex', alignItems: 'center', gap: '1rem', border: '1px solid #ccc', borderRadius: '8px', padding: '1rem' };
const cartImageStyle = { width: '80px', height: '80px', objectFit: 'cover', borderRadius: '5px' };
const itemDetailsStyle = { flex: 1 };
const quantityControlStyle = { display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' };
const qtyButtonStyle = { width: '30px', height: '30px', fontSize: '1.2rem', background: '#3498db', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' };
const deleteButtonStyle = { background: '#e74c3c', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '5px', cursor: 'pointer' };
const actionButtonsStyle = { display: 'flex', gap: '1rem', justifyContent: 'flex-end', marginTop: '2rem' };
const continueButtonStyle = { background: '#3498db', color: 'white', border: 'none', padding: '1rem 2rem', borderRadius: '5px', cursor: 'pointer' };
const checkoutButtonStyle = { background: '#27ae60', color: 'white', border: 'none', padding: '1rem 2rem', borderRadius: '5px', cursor: 'pointer' };

export default ShoppingCart;
