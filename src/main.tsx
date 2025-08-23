// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { io } from "socket.io-client";

// ✅ Socket client should live in browser code, not vite.config.ts
const socket = io("wss://codefury-hackathon.onrender.com", {
  transports: ["websocket"],
});

socket.on("connect", () => {
  console.log("Connected:", socket.id);
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
