import { apiIsAuth } from "../composables/api";

async function getAuthToken() {
  try {
    const response = await apiIsAuth();
    const token = response.data.token;
    localStorage.setItem('authToken', token);
    return token;
  } catch (e) {
    return null;
  }
}


async function isAuth() {
  try {
    await apiIsAuth();
    return true;
  } catch (e) {
    return false;
  }
}


export default defineNuxtRouteMiddleware(async (to, from) => {
  if (!(await isAuth())) return navigateTo("/login");
});

