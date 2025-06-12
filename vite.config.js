import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
      darkMode: 'class',
      theme: {
        extend: {
          container: {
            center: true,
            padding: "1.25rem",
          },
        },
      },
      plugins: [],
    }),
  ],
});
