import axios from "axios";


// export default {
//   axios: {
//     baseURL: 'https://parkalert.onrender.com',
//     credentials: true,
//     withCredentials:false,
//     interceptors: {
//       request: (config :any) => {
//         console.log("interceptors request");
//         const token = localStorage.getItem("token");
//           if (token) {
//             config.headers.Authorization = `Bearer ${token}`; // 如果 token 存在，就在 Authorization Header 中攜帶
//             console.log("Authorization");
//           }
//         config.withCredentials = true;
//         return config;
//       },
//       response: (response :any) => {
//         console.log('interceptors response')
//         return response
//       }
//     }
//   }
// }

const instance = axios.create({
  // to-do : use .env file to control this
  baseURL: "https://parkalert.onrender.com"
});

instance.interceptors.request.use((config) => {
  // console.log("interceptors request");
      const token = localStorage.getItem("token");
      // console.log(token);
      if (token) {
        config.headers.Authorization = "Bearer " +token; // 如果 token 存在，就在 Authorization Header 中攜帶
        // console.log("Authorization");
      }
  config.withCredentials = false;
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
