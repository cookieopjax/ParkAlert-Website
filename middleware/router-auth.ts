import { apiIsAuth } from "../composables/api";

async function isAuth() {
  try {
    await apiIsAuth();
    console.log("i am auth");
      // 如果已經登錄，重定向到目標路由
    navigateTo("/haha");
    return true;
  } catch (e) {
    // 如果未登錄，重定向到登錄頁面
    throw new Error("User is not authenticated");
    console.log(e + " not auth");
    navigateTo("/login");
  }
};

export default async function () {
  const route = useRoute();
  console.log(route.path+" is route");
  if (route.path === '/login') {
    console.log("route is /login");
    return;
  }
  else{
    try {
      const a = await isAuth();
      if(a){
        console.log("i am auth");
        navigateTo("/haha");
      }
      
    } catch (e) {
      // 如果未登錄，重定向到登錄頁面
      console.log(e + " not auth");
      navigateTo("/login");
    }
    
    
  }

  
};
