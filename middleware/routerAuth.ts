import { apiIsAuth } from "../composables/api";
async function isAuth() {
  try {
    const res = await apiIsAuth();
    return true
  } catch (e) {
    // error handling
    console.log(e);
    return false
  }
}
export default async function ({ redirect }) {
  if (!isAuth()) {
    return abortNavigation();
  }
  return navigateTo("/");
};
