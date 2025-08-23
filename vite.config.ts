import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { io } from "socket.io-client";
// vite.config.ts




const socket = io("wss://codefury-hackathon.onrender.com", {
  transports: ["websocket"],   // force WebSocket only
});

socket.on("connect", () => {
  console.log("Connected:", socket.id);
});


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "0.0.0.0",
    port: 8080,
    allowedHosts: [
      'codefury-hackathon.onrender.com' // ✅ whitelist your host
    ]
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
