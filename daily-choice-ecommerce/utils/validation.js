/**
 * Form Validation Utilities
 */

export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPhone = (phone) => {
  const phoneRegex = /^[\d\s\-\(\)]+$/;
  const cleaned = phone.replace(/\D/g, '');
  return phoneRegex.test(phone) && cleaned.length >= 10;
};

export const isValidZipCode = (zipCode) => {
  const zipRegex = /^\d{5}(-\d{4})?$/;
  return zipRegex.test(zipCode);
};

export const isValidCreditCard = (cardNumber) => {
  const cleaned = cardNumber.replace(/\s/g, '');
  
  if (!/^\d+$/.test(cleaned)) return false;
  if (cleaned.length < 13 || cleaned.length > 19) return false;
  
  // Luhn algorithm
  let sum = 0;
  let isEven = false;
  
  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = parseInt(cleaned.charAt(i), 10);
    
    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    
    sum += digit;
    isEven = !isEven;
  }
  
  return sum % 10 === 0;
};

export const isValidCVV = (cvv) => {
  return /^\d{3,4}$/.test(cvv);
};

export const isValidPassword = (password, minLength = 8) => {
  if (password.length < minLength) return false;
  
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
  return hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
};

export const validateForm = (fields, rules) => {
  const errors = {};
  
  Object.keys(rules).forEach(fieldName => {
    const value = fields[fieldName];
    const fieldRules = rules[fieldName];
    
    if (fieldRules.required && (!value || value.trim() === '')) {
      errors[fieldName] = `${fieldName} is required`;
      return;
    }
    
    if (fieldRules.minLength && value.length < fieldRules.minLength) {
      errors[fieldName] = `${fieldName} must be at least ${fieldRules.minLength} characters`;
      return;
    }
    
    if (fieldRules.maxLength && value.length > fieldRules.maxLength) {
      errors[fieldName] = `${fieldName} must be no more than ${fieldRules.maxLength} characters`;
      return;
    }
    
    if (fieldRules.pattern && !fieldRules.pattern.test(value)) {
      errors[fieldName] = fieldRules.message || `${fieldName} is invalid`;
      return;
    }
    
    if (fieldRules.custom && !fieldRules.custom(value)) {
      errors[fieldName] = fieldRules.message || `${fieldName} is invalid`;
    }
  });
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
