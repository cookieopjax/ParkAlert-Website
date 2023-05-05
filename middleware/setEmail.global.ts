async function isAuth() {
  try {
    const res = await apiIsAuth();
    const email = useState("email", () => res.data.email);
  } catch (e: any) {}
}

export default defineNuxtRouteMiddleware(async (to, from) => {
  await isAuth();
});
