import { apiIsAuth } from "../composables/api";
async function isAuth() {
  try {
    await apiIsAuth();
    return true
  } catch (e) {
    // error handling
    console.log(e+"not auth");
    return false
  }
}
export default async function () {
  const route = useRoute();
  if (route.path === '/login') {}
  else{
    const a = await isAuth();
    console.log(a+" true or false from isAuth");
    if (a) {
      return navigateTo("/haha");
    }
    else{
      return navigateTo("/login");
    }
    
    
  }

  
};
