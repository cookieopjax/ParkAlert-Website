async function isAuth() {
  try {
    const api = useApi();
    const res = await api.isAuth();
    const email = useState("email", () => res.data.email);
    return true;
  } catch (e: any) {
    return false;
  }
}

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (!(await isAuth())) return navigateTo("/login");
});
