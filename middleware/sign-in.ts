export default  defineNuxtRouteMiddleware(async(to, from) => {
    // setting the redirect code to '301 Moved Permanently'
    const route = useRoute();
    console.log(route.path+" is route");
    if (route.path === '/login') {
        console.log("route is /login");
        return;
    }
    else{
        try {
            const a = await isAuth();
            console.log(a +" is true or false")
            if(a){
              console.log("i am auth");
              return navigateTo('/firstPage', { redirectCode: 301 })
            }
            else{
                console.log("a is false");
                return  navigateTo('/login', { redirectCode: 301 })
            }
            
            
          } catch (e) {
            // 如果未登錄，重定向到登錄頁面
            console.log(e + " not auth");
            return navigateTo('/firstPage', { redirectCode: 301 })
          }
    }
    
  })

async function isAuth() {
  try {
    await apiIsAuth();
    console.log("my api is auth");
      // 如果已經登錄，重定向到目標路由
    // navigateTo("/haha");
    return true;
  } catch (e) {
    // 如果未登錄，重定向到登錄頁面
    console.log("fuck");
    return false
    throw new Error("User is not authenticated");
    
  }
};