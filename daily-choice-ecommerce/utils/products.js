/**
 * Product Utilities
 */

export const filterProducts = (products, filters) => {
  let filtered = [...products];
  
  if (filters.category) {
    filtered = filtered.filter(product => 
      product.category === filters.category
    );
  }
  
  if (filters.minPrice !== undefined) {
    filtered = filtered.filter(product => 
      product.price >= filters.minPrice
    );
  }
  
  if (filters.maxPrice !== undefined) {
    filtered = filtered.filter(product => 
      product.price <= filters.maxPrice
    );
  }
  
  if (filters.minRating !== undefined) {
    filtered = filtered.filter(product => 
      product.rating >= filters.minRating
    );
  }
  
  if (filters.inStock) {
    filtered = filtered.filter(product => 
      product.stock > 0
    );
  }
  
  if (filters.search) {
    const searchLower = filters.search.toLowerCase();
    filtered = filtered.filter(product =>
      product.name.toLowerCase().includes(searchLower) ||
      (product.description && product.description.toLowerCase().includes(searchLower))
    );
  }
  
  return filtered;
};

export const sortProducts = (products, sortBy = 'featured') => {
  const sorted = [...products];
  
  switch (sortBy) {
    case 'price-low':
      return sorted.sort((a, b) => a.price - b.price);
    
    case 'price-high':
      return sorted.sort((a, b) => b.price - a.price);
    
    case 'name-asc':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    
    case 'name-desc':
      return sorted.sort((a, b) => b.name.localeCompare(a.name));
    
    case 'rating':
      return sorted.sort((a, b) => b.rating - a.rating);
    
    case 'newest':
      return sorted.sort((a, b) => 
        new Date(b.createdAt) - new Date(a.createdAt)
      );
    
    case 'popular':
      return sorted.sort((a, b) => b.reviews - a.reviews);
    
    default:
      return sorted;
  }
};

export const searchProducts = (products, query) => {
  if (!query || query.trim() === '') return products;
  
  const searchTerms = query.toLowerCase().split(' ');
  
  return products.filter(product => {
    const searchableText = [
      product.name,
      product.description,
      product.category,
      product.brand
    ].join(' ').toLowerCase();
    
    return searchTerms.every(term => searchableText.includes(term));
  });
};

export const getProductsByCategory = (products, category) => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (products, limit = 8) => {
  return products
    .filter(product => product.featured)
    .slice(0, limit);
};

export const getRelatedProducts = (products, currentProduct, limit = 4) => {
  return products
    .filter(product => 
      product.id !== currentProduct.id &&
      product.category === currentProduct.category
    )
    .slice(0, limit);
};

export const calculateAverageRating = (reviews) => {
  if (!reviews || reviews.length === 0) return 0;
  
  const sum = reviews.reduce((total, review) => total + review.rating, 0);
  return (sum / reviews.length).toFixed(1);
};

export const getDiscountPercentage = (originalPrice, salePrice) => {
  if (!originalPrice || !salePrice) return 0;
  return Math.round(((originalPrice - salePrice) / originalPrice) * 100);
};

export const isOnSale = (product) => {
  return product.originalPrice && product.price < product.originalPrice;
};

export const isInStock = (product) => {
  return product.stock > 0;
};

export const isLowStock = (product, threshold = 5) => {
  return product.stock > 0 && product.stock <= threshold;
};

export const getPriceRange = (products) => {
  if (products.length === 0) return { min: 0, max: 0 };
  
  const prices = products.map(p => p.price);
  return {
    min: Math.min(...prices),
    max: Math.max(...prices)
  };
};
