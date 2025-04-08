export default defineNuxtRouteMiddleware(async () => {
  const user = useSupabaseUser();

  if (!user.value) return navigateTo("/login");

  if (user.value.user_metadata.role !== "staff") {
    return navigateTo("/unauthorized");
  }
});
