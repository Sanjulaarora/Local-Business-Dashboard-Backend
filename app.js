import express from "express";
import cors from "cors";

const app = express();

// Route import
import routes from "./routes/index.js";

// CORS configurations
const corsOptions = {
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH", "HEAD"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"]
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Mount API routes
app.use("/api", routes);

// Health check endpoint
app.get("/", (req, res) => {
    res.send("Business Dashboard Server is up and running!");
});

// 404 route handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("Unhandled Error:", err);
  res.status(500).json({ message: "Internal Server Error" });
});

export default app;