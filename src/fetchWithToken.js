import { apiUrl } from "../env";

// export async function refreshToken() {
//   const refresh = localStorage.getItem("refresh");
//   if (!refresh) return null;

//   try {
//     const response = await fetch(`${apiUrl}authenticate/token/refresh/`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ refresh }),
//     });

//     const data = await response.json();

//     if (response.ok) {
//       localStorage.setItem("access", data.access);
//       return data.access;
//     } else {
//       localStorage.clear();
//       window.location.href = "/signin";
//       return null;
//     }
//   } catch (error) {
//     console.error("Error refreshing token:", error);
//     return null;
//   }
// }

async function refreshToken() {
  const refresh = localStorage.getItem("refresh");
  if (!refresh) {
    console.error("No refresh token found");
    return null;
  }
  try {
    const response = await fetch(`${apiUrl}token/refresh/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refresh }),
    });
    if (!response.ok) {
      throw new Error("Failed to refresh token");
    }
    const data = await response.json();
    localStorage.setItem("access", data.access);
    return data.access;
  } catch (err) {
    console.error("Token refresh failed:", err);
    return null;
  }
}

// export async function fetchWithAuth(url, options = {}) {
//   let access = localStorage.getItem("access");
//   const refresh = localStorage.getItem("refresh");

//   async function makeRequest(token) {
//     const headers = {
//       Authorization: `Bearer ${token}`,
//       "Content-Type": "application/json",
//       ...(options.headers || {}),
//     };
//     return fetch(url, { ...options, headers });
//   }

//   let response = await makeRequest(access);

//   if (response.status === 401 && refresh) {
//     const newAccess = await refreshToken();
//     if (newAccess) {
//       response = await makeRequest(newAccess);
//     }
//   }

//   return response;
// }

export async function fetchWithAuth(url, options = {}) {
  let access = localStorage.getItem("access");
  const refresh = localStorage.getItem("refresh");

  async function makeRequest(token) {
    const headers = {
      ...options.headers, // Spread options.headers first
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, // Ensure Authorization is set last
    };
    return fetch(url, { ...options, headers });
  }

  let response = await makeRequest(access);

  if (response.status === 401 && refresh) {
    const newAccess = await refreshToken();
    if (newAccess) {
      localStorage.setItem("access", newAccess);
      response = await makeRequest(newAccess);
    } else {
      throw new Error("Unable to refresh token");
    }
  }

  return response;
}
