export default defineNuxtRouteMiddleware((to) => {
  const session = useSupabaseSession();
  if (!session.value) {
    return navigateTo("/login/");
  }
});
