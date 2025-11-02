/**
 * API Utilities
 */

export const fetchWithTimeout = async (url, options = {}, timeout = 5000) => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal
    });
    clearTimeout(id);
    return response;
  } catch (error) {
    clearTimeout(id);
    throw error;
  }
};

export const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({
      message: response.statusText
    }));
    throw new Error(error.message || 'Request failed');
  }
  
  return response.json();
};

export const get = async (url, options = {}) => {
  const response = await fetchWithTimeout(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    },
    ...options
  });
  
  return handleResponse(response);
};

export const post = async (url, data, options = {}) => {
  const response = await fetchWithTimeout(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    },
    body: JSON.stringify(data),
    ...options
  });
  
  return handleResponse(response);
};

export const put = async (url, data, options = {}) => {
  const response = await fetchWithTimeout(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    },
    body: JSON.stringify(data),
    ...options
  });
  
  return handleResponse(response);
};

export const del = async (url, options = {}) => {
  const response = await fetchWithTimeout(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    },
    ...options
  });
  
  return handleResponse(response);
};

export const buildQueryString = (params) => {
  const query = new URLSearchParams();
  
  Object.keys(params).forEach(key => {
    const value = params[key];
    if (value !== null && value !== undefined && value !== '') {
      query.append(key, value);
    }
  });
  
  return query.toString();
};

export const createApiUrl = (baseUrl, endpoint, params = {}) => {
  const queryString = buildQueryString(params);
  const url = `${baseUrl}${endpoint}`;
  return queryString ? `${url}?${queryString}` : url;
};
