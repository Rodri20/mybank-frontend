// lib/api.js
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/api";

/**
 * Helper general para llamadas a la API Laravel.
 */
async function request(endpoint, options = {}) {
  const config = {
    headers: {
      "Content-Type": "application/json",
      ...(options.token && { Authorization: `Bearer ${options.token}` }),
    },
    ...options,
  };

  const response = await fetch(`${API_URL}${endpoint}`, config);

  let data;
  try {
    data = await response.json();
  } catch {
    throw new Error("Error al procesar la respuesta del servidor");
  }

  if (!response.ok) {
    const message = data?.message || "Error desconocido en la API";
    throw new Error(message);
  }

  return data;
}

// 🔐 Autenticación
export const register = (data) =>
  request("/register", {
    method: "POST",
    body: JSON.stringify(data),
  });

export const login = (data) =>
  request("/login", {
    method: "POST",
    body: JSON.stringify(data),
  });

export const logout = (token) =>
  request("/logout", {
    method: "POST",
    token,
  });

// 👤 Perfil
export const getProfile = (token) =>
  request("/profile", {
    method: "GET",
    token,
  });

export const updateProfile = (token, data) =>
  request("/profile", {
    method: "PUT",
    body: JSON.stringify(data),
    token,
  });

export const deleteAccount = (token) =>
  request("/profile", {
    method: "DELETE",
    token,
  });
