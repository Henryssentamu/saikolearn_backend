import { apiUrl } from "../../env";
export async function refreshToken() {
  const refresh = localStorage.getItem("refreshToken");
  if (!refresh) return false;

  const response = await fetch(`${apiUrl}token/refresh/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refresh }),
  });

  const data = await response.json();
  if (response.ok) {
    localStorage.setItem("accessToken", data.access);
    return true;
  } else {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    return false;
  }
}

export async function fetchWithAuth(apiFunction) {
  let accessToken = localStorage.getItem("accessToken");

  let response = await apiFunction(accessToken); // Call the API function with the token

  if (response.status === 401) {
    // Token expired, try to refresh
    const refreshed = await refreshToken();
    if (refreshed) {
      accessToken = localStorage.getItem("accessToken"); // Get new token
      return apiFunction(accessToken); // Retry API call with the new token
    } else {
      window.location.href = "/login"; // Redirect to login if refresh fails
    }
  }

  return response;
}
