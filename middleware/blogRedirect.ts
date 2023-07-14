export default defineNuxtRouteMiddleware((to, _) => {
  if (/\/\d\d\d\d/.test(to.path)) {
    return navigateTo("/blog" + to.path)
  }
  return navigateTo("/404")
})
