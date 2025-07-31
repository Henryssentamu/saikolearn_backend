import { apiUrl } from "../env";

export async function refreshToken() {
  const refresh = localStorage.getItem("refresh");
  if (!refresh) return null;

  try {
    const response = await fetch(`${apiUrl}authenticate/token/refresh/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refresh }),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("access", data.access);
      return data.access;
    } else {
      localStorage.clear();
      window.location.href = "/signin";
      return null;
    }
  } catch (error) {
    console.error("Error refreshing token:", error);
    return null;
  }
}

export async function fetchWithAuth(url, options = {}) {
  let access = localStorage.getItem("access");
  const refresh = localStorage.getItem("refresh");

  async function makeRequest(token) {
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...(options.headers || {}),
    };
    return fetch(url, { ...options, headers });
  }

  let response = await makeRequest(access);

  if (response.status === 401 && refresh) {
    const newAccess = await refreshToken();
    if (newAccess) {
      response = await makeRequest(newAccess);
    }
  }

  return response;
}
