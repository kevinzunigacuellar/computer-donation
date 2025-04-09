export default defineNuxtRouteMiddleware(() => {
  const session = useSupabaseSession();

  if (session) {
    return navigateTo("/admin/inventory");
  }
});
