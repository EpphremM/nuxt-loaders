import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  css: ['./playground/app/assets/css/main.css'],
  modules: ["../src/module"],
  devtools: { enabled: true },
  loaders: {
    autoSetup: true,
    loadersDir: "./app/components/load",
    routeRules: {
      "/": "BasicLoader",
      "/about": "BasicLoader",
      "/home": "BasicLoader"
    }
  },
  vite: {
    plugins: [
      tailwindcss()
    ]
  }
});
