import { connectDB } from "../config/db.js";
import { createRemedy, deleteRemedy, getRemedies, updatedRemedy } from "../controllers/remedy.controller.js";

connectDB();

export default async function handler(req, res) {
  // Set CORS headers
  const allowedOrigins = [
    "http://localhost:5173",
    process.env.VITE_API_URL,
  ];

  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  } else {
    res.setHeader(
      "Access-Control-Allow-Origin",
      process.env.VITE_API_URL
    ); // fallback or remove to restrict
  }
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // Handle preflight OPTIONS request
  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  const { method, query } = req;

  switch (method) {
    case "GET":
      return getRemedies(req, res);

    case "POST":
      return createRemedy(req, res);

    case "PUT":
      if (!query.id)
        return res.status(400).json({ error: "Missing id parameter" });
      return updatedRemedy(req, res);

    case "DELETE":
      if (!query.id)
        return res.status(400).json({ error: "Missing id parameter" });
      return deleteRemedy(req, res);

    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
}