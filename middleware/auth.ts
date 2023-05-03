import { apiIsAuth } from "../composables/api";



async function isAuth() {
  try {
    await apiIsAuth();
    return true;
  } catch (e: any) {
    if (e.response.status === 401) {
      // 提示使用者帳密錯誤...
      console.log("401 error");
    }
    return false;
  }
}




export default defineNuxtRouteMiddleware(async (to, from) => {
  if (!(await isAuth())) return navigateTo("/login");
});
