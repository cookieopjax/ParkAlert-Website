import axios from "axios";

const instance = axios.create({
  // to-do : use .env file to control this
  baseURL: "https://parkalert.onrender.com"
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    // 如果 token 存在，就在 Authorization Header 中攜帶
    config.headers.Authorization = "Bearer " + token;
  }
  return config;
});

interface userDto {
  email: string;
  password: string;
}

interface updatePasswordDto {
  email: string;
  password: string;
  newPassword: string;
}

export const apiCreateUser = (data: userDto) => instance.post("/users", data);
export const apiIsAuth = () => instance.get("/users/isAuth");
export const apiSignin = (data: userDto) => instance.post("/users/signin", data);
export const apiSignout = () => instance.get("/users/signout");
export const apiUpdatePassword = (data: updatePasswordDto) => instance.put("/users/password", data);
