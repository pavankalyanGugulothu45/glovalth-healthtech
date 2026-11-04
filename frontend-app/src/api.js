
const BASE = "https://glovalth-healthtech-1.onrender.com/api";
const ROTA_BASE = "https://glovalth-healthtech-1.onrender.com/api";

async function request(url, options = {}, authenticated = false) {

  const headers = {
    ...(options.headers || {}),
  };

  if (authenticated) {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("Authentication token missing. Please log in again.");
    }

    headers.Authorization = `Token ${token}`;
  }

  const res = await fetch(url, {
    ...options,
    headers,
  });

  const contentType = res.headers.get("content-type") || "";

  if (!contentType.includes("application/json")) {
    throw new Error(
      `Server returned an unexpected response (${res.status}). Check the API URL.`
    );
  }

  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      typeof data === "object"
        ? JSON.stringify(data)
        : "Request failed"
    );
  }

  return data;
}


// =========================================================
// EXISTING APPLICATION API — RENDER
// =========================================================

export function apiGet(path) {
  return request(`${BASE}${path}`);
}

export function apiPost(path, body) {
  return request(`${BASE}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

export function apiPut(path, body) {
  return request(`${BASE}${path}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

export function apiDelete(path) {
  return request(`${BASE}${path}`, {
    method: "DELETE",
  });
}


// =========================================================
// ROTA API — RENDER + TOKEN AUTHENTICATION
// =========================================================

export function rotaGet(path) {
  return request(`${ROTA_BASE}${path}`, {}, true);
}

export function rotaPost(path, body) {
  return request(`${ROTA_BASE}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  }, true);
}

export function rotaPut(path, body) {
  return request(`${ROTA_BASE}${path}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  }, true);
}

export function rotaDelete(path) {
  return request(`${ROTA_BASE}${path}`, {
    method: "DELETE",
  }, true);
}
