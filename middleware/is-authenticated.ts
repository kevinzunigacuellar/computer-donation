export default defineNuxtRouteMiddleware(() => {
  const session = useSupabaseSession();
  // const user = useSupabaseUser();
  if (session) {
    return navigateTo("/admin/inventory/");
  }
});
