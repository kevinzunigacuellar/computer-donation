import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  css: ["~/assets/css/tailwind.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  devtools: { enabled: true },
  modules: ["shadcn-nuxt", "@nuxtjs/supabase", "@nuxtjs/color-mode"],
  supabase: {
    redirectOptions: {
      include: ["/admin(/*)?"],
      login: "/admin/login",
      callback: "/admin/confirm",
    },
  },
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
  colorMode: {
    classSuffix: ''
  },
  routeRules: {
    '/admin/**': { ssr: false },
  }
});
