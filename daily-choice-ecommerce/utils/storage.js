/**
 * Local Storage Utilities
 */

export const setItem = (key, value) => {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
    return true;
  } catch (error) {
    console.error('Error saving to localStorage:', error);
    return false;
  }
};

export const getItem = (key, defaultValue = null) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return defaultValue;
  }
};

export const removeItem = (key) => {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error('Error removing from localStorage:', error);
    return false;
  }
};

export const clear = () => {
  try {
    localStorage.clear();
    return true;
  } catch (error) {
    console.error('Error clearing localStorage:', error);
    return false;
  }
};

export const hasItem = (key) => {
  return localStorage.getItem(key) !== null;
};

// Cart-specific storage functions
export const saveCart = (cart) => {
  return setItem('shopping_cart', cart);
};

export const loadCart = () => {
  return getItem('shopping_cart', []);
};

// User preferences storage
export const saveUserPreferences = (preferences) => {
  return setItem('user_preferences', preferences);
};

export const loadUserPreferences = () => {
  return getItem('user_preferences', {
    theme: 'light',
    currency: 'USD',
    language: 'en'
  });
};

// Recently viewed products
export const addToRecentlyViewed = (product, maxItems = 10) => {
  const recentlyViewed = getItem('recently_viewed', []);
  
  const filtered = recentlyViewed.filter(item => item.id !== product.id);
  const updated = [product, ...filtered].slice(0, maxItems);
  
  return setItem('recently_viewed', updated);
};

export const getRecentlyViewed = () => {
  return getItem('recently_viewed', []);
};
