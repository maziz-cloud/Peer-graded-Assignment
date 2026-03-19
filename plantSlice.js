import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  plants: [
    { id: 1, name: 'Snake Plant', price: 25, category: 'Succulents', image: '/images/snake.jpg', inCart: false },
    { id: 2, name: 'Boston Fern', price: 30, category: 'Ferns', image: '/images/fern.jpg', inCart: false },
    { id: 3, name: 'Peace Lily', price: 28, category: 'Flowering', image: '/images/lily.jpg', inCart: false },
    { id: 4, name: 'Aloe Vera', price: 22, category: 'Succulents', image: '/images/aloe.jpg', inCart: false },
    { id: 5, name: 'Maidenhair Fern', price: 32, category: 'Ferns', image: '/images/maidenhair.jpg', inCart: false },
    { id: 6, name: 'Orchid', price: 45, category: 'Flowering', image: '/images/orchid.jpg', inCart: false }
  ],
  cart: [],               // each item: { id, name, price, image, quantity }
  cartCount: 0,
  cartTotal: 0
};

const plantSlice = createSlice({
  name: 'plants',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const plantId = action.payload;
      const plant = state.plants.find(p => p.id === plantId);
      if (!plant) return;

      // Mark plant as inCart (to disable button)
      plant.inCart = true;

      // Check if already in cart
      const cartItem = state.cart.find(item => item.id === plantId);
      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        state.cart.push({ ...plant, quantity: 1 });
      }

      // Update totals
      state.cartCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
      state.cartTotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    },
    incrementQuantity: (state, action) => {
      const id = action.payload;
      const item = state.cart.find(i => i.id === id);
      if (item) {
        item.quantity += 1;
        state.cartCount += 1;
        state.cartTotal += item.price;
      }
    },
    decrementQuantity: (state, action) => {
      const id = action.payload;
      const index = state.cart.findIndex(i => i.id === id);
      if (index === -1) return;

      const item = state.cart[index];
      if (item.quantity > 1) {
        item.quantity -= 1;
        state.cartCount -= 1;
        state.cartTotal -= item.price;
      } else {
        // Remove item completely
        state.cartCount -= 1;
        state.cartTotal -= item.price;
        state.cart.splice(index, 1);
        // Re-enable Add to Cart button for this plant
        const plant = state.plants.find(p => p.id === id);
        if (plant) plant.inCart = false;
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const index = state.cart.findIndex(i => i.id === id);
      if (index === -1) return;

      const item = state.cart[index];
      state.cartCount -= item.quantity;
      state.cartTotal -= item.price * item.quantity;
      state.cart.splice(index, 1);

      const plant = state.plants.find(p => p.id === id);
      if (plant) plant.inCart = false;
    }
  }
});

export const { addToCart, incrementQuantity, decrementQuantity, removeFromCart } = plantSlice.actions;
export default plantSlice.reducer;
