export default defineNuxtRouteMiddleware(async () => {
  const user = useSupabaseUser();

  // If not logged in, let Nuxt handle auth elsewhere
  if (!user.value) return navigateTo("/login");

  if (user.value.user_metadata.role !== "staff") {
    return navigateTo("/unauthorized");
  }
});
