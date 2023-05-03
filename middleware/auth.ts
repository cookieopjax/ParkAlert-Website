import axios from "axios";
import { apiIsAuth } from "../composables/api";

const instance = axios.create({
  // to-do : use .env file to control this
  baseURL: "https://parkalert.onrender.com"
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;// 如果 token 存在，就在 Authorization Header 中攜帶
    console.log("Authorization");
  }
  return config;
});

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
