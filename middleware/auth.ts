export default defineNuxtRouteMiddleware((to, from) => {

  // auth middleware
  const session = useSupabaseSession()

  if (!session.value) {
    return navigateTo('/login')
  }
})
