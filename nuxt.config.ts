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
    redirect: false,
  },
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
  colorMode: {
    classSuffix: "",
  },
  ssr: false,
});
