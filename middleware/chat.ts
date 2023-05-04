export default defineNuxtRouteMiddleware((to, from) => {
  const emailData = useState("chatEmail");
  if (!emailData.value) return navigateTo("/match");
});
