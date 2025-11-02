/**
 * Shopping Cart Utilities
 */

export const calculateSubtotal = (items) => {
  return items.reduce((total, item) => total + (item.price * item.quantity), 0);
};

export const calculateTax = (subtotal, taxRate = 0.08) => {
  return subtotal * taxRate;
};

export const calculateShipping = (subtotal, freeShippingThreshold = 50) => {
  return subtotal >= freeShippingThreshold ? 0 : 5.99;
};

export const calculateTotal = (items, taxRate = 0.08, freeShippingThreshold = 50) => {
  const subtotal = calculateSubtotal(items);
  const tax = calculateTax(subtotal, taxRate);
  const shipping = calculateShipping(subtotal, freeShippingThreshold);
  
  return {
    subtotal: parseFloat(subtotal.toFixed(2)),
    tax: parseFloat(tax.toFixed(2)),
    shipping: parseFloat(shipping.toFixed(2)),
    total: parseFloat((subtotal + tax + shipping).toFixed(2))
  };
};

export const addToCart = (cart, product, quantity = 1) => {
  const existingItem = cart.find(item => item.id === product.id);
  
  if (existingItem) {
    return cart.map(item =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + quantity }
        : item
    );
  }
  
  return [...cart, { ...product, quantity }];
};

export const removeFromCart = (cart, productId) => {
  return cart.filter(item => item.id !== productId);
};

export const updateQuantity = (cart, productId, quantity) => {
  if (quantity <= 0) {
    return removeFromCart(cart, productId);
  }
  
  return cart.map(item =>
    item.id === productId
      ? { ...item, quantity }
      : item
  );
};

export const getCartItemCount = (cart) => {
  return cart.reduce((count, item) => count + item.quantity, 0);
};

export const clearCart = () => {
  return [];
};
