// server.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

// Necesario para usar __dirname con ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Archivos estáticos (CSS, JS, imágenes, etc.)
app.use(express.static(path.join(__dirname, "public")));

// Rutas
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "views", "home.html")));
app.get("/products", (req, res) => res.sendFile(path.join(__dirname, "views", "products.html")));
app.get("/about", (req, res) => res.sendFile(path.join(__dirname, "views", "about.html")));
app.get("/contacts", (req, res) => res.sendFile(path.join(__dirname, "views", "contacts.html")));

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

